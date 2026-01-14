# Supabase Integration Guide

## Database Schema

The platform uses a comprehensive Supabase PostgreSQL database with 12 tables:

### Core Tables

1. **users** - User profiles with multi-role support
   - Supports roles: farmer, owner, manufacturer, buyer, funder, admin
   - Includes KYC status, ratings, and multi-language support (fr, en, so, ff, bm, wo)
   - Location stored as JSONB with PostGIS coordinates support

2. **equipment** - Agricultural equipment listings
   - Full-text search ready with category indexing
   - PostGIS geography type for location-based queries
   - Status tracking (active, inactive, maintenance, sold)
   - Rating and review count aggregation

3. **bookings** - Equipment rental reservations
   - Computed duration_days field
   - Multiple status levels for booking and payment
   - Delivery method options (pickup/delivery)
   - Linked to equipment and users

4. **reviews** - Rating and review system
   - Supports rating equipment, farmers, and owners
   - Owner response capability
   - Helpful vote counting
   - Status management (published, hidden, flagged)

5. **payments** - Transaction tracking
   - Multiple payment methods (mobile_money, card, bank_transfer, cash)
   - Payment type tracking (deposit, balance, refund)
   - External provider reference support

6. **financing_requests** - Loan/financing applications
   - Amount, term, and purpose tracking
   - Credit scoring integration ready
   - Risk level assessment
   - Review workflow support

7. **financing_offers** - Funder proposals
   - Interest rate and term specification
   - Monthly payment calculation
   - Expiration date tracking
   - Status management

8. **favorites** - User equipment favorites
   - Simple many-to-many relationship
   - Unique constraint per user-equipment pair

9. **notifications** - User notification system
   - Multiple notification types
   - Read status tracking
   - Action URL for deep linking
   - Real-time subscription ready

10. **conversations** - Messaging threads
    - Two-participant conversations
    - Optional booking linkage
    - Last message timestamp tracking

11. **messages** - Conversation messages
    - Attachment support via JSONB
    - Read receipts
    - Real-time updates via subscriptions

12. **analytics_events** - Usage tracking
    - Event type enumeration
    - Session tracking
    - Device and IP information
    - JSONB event data for flexibility

## Security (Row Level Security)

All tables have RLS enabled with appropriate policies:

- **Authentication required**: Most operations require authenticated users
- **Ownership verification**: Users can only access/modify their own data
- **Role-based access**: Funders and admins have elevated permissions
- **Public read where appropriate**: Published reviews and active equipment visible to all

## Client Setup

### Configuration Files

- `src/lib/supabase.ts` - Supabase client initialization
- `src/types/database.ts` - TypeScript type definitions for all tables
- `src/context/AuthContext.tsx` - Authentication context with Supabase Auth integration

### Custom Hooks

1. **useEquipment** - Fetch all active equipment
2. **useEquipmentById** - Fetch single equipment by ID
3. **useUserEquipment** - Fetch user's equipment listings
4. **useUserBookings** - Fetch user's bookings
5. **useFavorites** - Manage user favorites (add/remove/check)
6. **useNotifications** - Real-time notifications with unread count

### Utility Functions

- `createBooking()` - Create new booking
- `updateBookingStatus()` - Update booking status
- Real-time subscriptions for notifications

## Authentication Flow

1. **Sign Up**:
   ```typescript
   const { register } = useAuth();
   await register({ email, password, name, phone });
   ```
   - Creates Supabase auth user
   - Creates corresponding user profile in users table
   - Auto-login after registration

2. **Sign In**:
   ```typescript
   const { login } = useAuth();
   await login(email, password);
   ```
   - Authenticates with Supabase Auth
   - Loads user profile from users table
   - Manages session automatically

3. **Sign Out**:
   ```typescript
   const { logout } = useAuth();
   await logout();
   ```
   - Clears Supabase session
   - Resets local state

## Usage Examples

### Fetching Equipment
```typescript
import { useEquipment } from '../hooks/useEquipment';

function EquipmentList() {
  const { equipment, isLoading, error } = useEquipment();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{/* render equipment */}</div>;
}
```

### Creating a Booking
```typescript
import { createBooking } from '../hooks/useBookings';

const result = await createBooking({
  equipment_id: 'xxx',
  farmer_id: user.id,
  start_date: '2024-01-01',
  end_date: '2024-01-07',
  total_cost: 50000,
  base_cost: 45000,
});
```

### Managing Favorites
```typescript
import { useFavorites } from '../hooks/useFavorites';

function EquipmentCard({ equipmentId }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites(user?.id);

  const handleToggleFavorite = async () => {
    if (isFavorite(equipmentId)) {
      await removeFavorite(equipmentId);
    } else {
      await addFavorite(equipmentId);
    }
  };
}
```

### Real-time Notifications
```typescript
import { useNotifications } from '../hooks/useNotifications';

function NotificationBell() {
  const { notifications, unreadCount, markAsRead } = useNotifications(user?.id);

  // Automatically updates when new notifications arrive
  return <Badge count={unreadCount} />;
}
```

## Environment Variables

Required in `.env`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Database Migrations

All migrations are located in the Supabase project:

1. `create_users_table` - User profiles
2. `enable_postgis_extension` - Enable PostGIS for geography
3. `create_equipment_table_fixed` - Equipment listings
4. `create_bookings_table_fixed` - Booking system
5. `create_reviews_and_messages_tables_fixed` - Reviews and messaging
6. `create_remaining_tables` - Payments, financing, favorites, notifications, analytics

## Next Steps

To complete the integration:

1. **Update Equipment Page**: Replace mock data with `useEquipment` hook
2. **Update Dashboard**: Use `useUserBookings` for booking data
3. **Implement Real-time Features**: Add notification bell component
4. **Add Booking Flow**: Implement booking creation with payment integration
5. **Add Search**: Implement full-text search on equipment table
6. **Add Messaging**: Build messaging interface using conversations/messages tables

## Performance Considerations

- All tables have appropriate indexes for common queries
- PostGIS indexes for geospatial queries on equipment
- Composite indexes for common filter combinations
- Use `.maybeSingle()` instead of `.single()` to avoid errors on empty results

## Security Best Practices

- Never expose service role key on client
- All sensitive operations should verify auth.uid()
- Use RLS policies to enforce data access rules
- Validate input on both client and database level (CHECK constraints)
- Sanitize user input before storing

## Support

For Supabase documentation: https://supabase.com/docs
For PostGIS documentation: https://postgis.net/docs/
