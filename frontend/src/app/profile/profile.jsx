"use client"
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, ShoppingBag, Heart, Settings, LogOut, Edit2, Save, X, Package, CreditCard, Bell, Lock, Truck, CheckCircle, Clock, XCircle, ChevronRight, Eye } from 'lucide-react';
import Navbar from '@/components/navbar/navbar';
export default function CraftedRootsProfile() {
  const [activeTab, setActiveTab] = useState('orders');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Craft Street, Artisan City, AC 12345',
    joinDate: 'January 15, 2024'
  });

  const [tempData, setTempData] = useState(profileData);
  const [orderFilter, setOrderFilter] = useState('all');

  const allOrders = [
    { 
      id: 'ORD-2025-001', 
      date: 'Jan 18, 2025', 
      total: '₹1,249', 
      status: 'Delivered', 
      items: [
        { name: 'Jute Bag', quantity: 2, price: '₹500' },
        { name: 'Handmade Soap', quantity: 3, price: '₹749' }
      ],
      estimatedDelivery: 'Jan 16, 2025',
      trackingNumber: 'TRK123456789'
    },
    { 
      id: 'ORD-2025-002', 
      date: 'Jan 15, 2025', 
      total: '₹895', 
      status: 'In Transit', 
      items: [
        { name: 'Ceramic Vase Set', quantity: 1, price: '₹895' }
      ],
      estimatedDelivery: 'Jan 22, 2025',
      trackingNumber: 'TRK987654321'
    },
    { 
      id: 'ORD-2025-003', 
      date: 'Jan 14, 2025', 
      total: '₹2,340', 
      status: 'Processing', 
      items: [
        { name: 'Wooden Wall Art', quantity: 1, price: '₹1,299' },
        { name: 'Soy Wax Candles', quantity: 4, price: '₹1,041' }
      ],
      estimatedDelivery: 'Jan 25, 2025',
      trackingNumber: 'TRK456789123'
    },
    { 
      id: 'ORD-2024-089', 
      date: 'Dec 20, 2024', 
      total: '₹679', 
      status: 'Cancelled', 
      items: [
        { name: 'Macrame Plant Hanger', quantity: 1, price: '₹679' }
      ],
      estimatedDelivery: 'N/A',
      trackingNumber: 'N/A'
    },
    { 
      id: 'ORD-2024-078', 
      date: 'Dec 5, 2024', 
      total: '₹1,565', 
      status: 'Delivered', 
      items: [
        { name: 'Handwoven Basket', quantity: 2, price: '₹920' },
        { name: 'Wooden Coasters', quantity: 1, price: '₹190' },
        { name: 'Hand Painted Lamp', quantity: 1, price: '₹455' }
      ],
      estimatedDelivery: 'Dec 10, 2024',
      trackingNumber: 'TRK789123456'
    }
  ];

  const wishlist = [
    { id: 1, name: 'Handwoven Basket', price: '₹459', inStock: true, discount: '15% OFF' },
    { id: 2, name: 'Ceramic Vase Set', price: '₹785', inStock: true, discount: null },
    { id: 3, name: 'Wooden Wall Art', price: '₹1,299', inStock: false, discount: '20% OFF' },
    { id: 4, name: 'Macrame Plant Hanger', price: '₹349', inStock: true, discount: null }
  ];

  const handleEdit = () => {
    setIsEditing(true);
    setTempData(profileData);
  };

  const handleSave = () => {
    setProfileData(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setTempData({ ...tempData, [field]: value });
  };

  const getStatusInfo = (status) => {
    switch(status) {
      case 'Delivered': 
        return { 
          color: 'bg-green-50 text-green-700 border-green-200', 
          icon: CheckCircle,
          iconColor: 'text-green-600'
        };
      case 'In Transit': 
        return { 
          color: 'bg-blue-50 text-blue-700 border-blue-200', 
          icon: Truck,
          iconColor: 'text-blue-600'
        };
      case 'Processing': 
        return { 
          color: 'bg-orange-50 text-orange-700 border-orange-200', 
          icon: Clock,
          iconColor: 'text-orange-600'
        };
      case 'Cancelled': 
        return { 
          color: 'bg-red-50 text-red-700 border-red-200', 
          icon: XCircle,
          iconColor: 'text-red-600'
        };
      default: 
        return { 
          color: 'bg-gray-50 text-gray-700 border-gray-200', 
          icon: Package,
          iconColor: 'text-gray-600'
        };
    }
  };

  const filteredOrders = orderFilter === 'all' 
    ? allOrders 
    : allOrders.filter(order => order.status.toLowerCase() === orderFilter.toLowerCase());

  const orderStats = {
    total: allOrders.length,
    delivered: allOrders.filter(o => o.status === 'Delivered').length,
    inTransit: allOrders.filter(o => o.status === 'In Transit').length,
    processing: allOrders.filter(o => o.status === 'Processing').length
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar/>

      {/* Profile Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center border-4 border-white shadow-lg">
                <User className="w-12 h-12 text-gray-600" />
              </div>
              <button className="absolute bottom-0 right-0 bg-orange-500 rounded-full p-2 shadow-lg hover:bg-orange-600 transition-colors">
                <Edit2 className="w-3 h-3 text-white" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{profileData.firstName} {profileData.lastName}</h2>
              <p className="text-gray-600 mb-1">{profileData.email}</p>
              <p className="text-gray-500 text-sm">Member since {profileData.joinDate}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{orderStats.total}</div>
                <div className="text-xs text-gray-600">Total Orders</div>
              </div>
              <div className="text-center border-l border-gray-300">
                <div className="text-2xl font-bold text-orange-600">{orderStats.inTransit}</div>
                <div className="text-xs text-gray-600">Active</div>
              </div>
              <div className="text-center border-l border-gray-300">
                <div className="text-2xl font-bold text-green-600">{orderStats.delivered}</div>
                <div className="text-xs text-gray-600">Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 sticky top-24">
              <nav className="space-y-1">
                {[
                  { id: 'orders', icon: Package, label: 'My Orders', badge: orderStats.inTransit + orderStats.processing },
                  { id: 'profile', icon: User, label: 'Profile Info' },
                  { id: 'wishlist', icon: Heart, label: 'Wishlist', badge: wishlist.length },
                  { id: 'addresses', icon: MapPin, label: 'Addresses' },
                  { id: 'payment', icon: CreditCard, label: 'Payment Methods' },
                  { id: 'notifications', icon: Bell, label: 'Notifications' },
                  { id: 'settings', icon: Settings, label: 'Settings' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === item.id
                        ? 'bg-orange-500 text-white shadow-sm'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </div>
                    {item.badge > 0 && (
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        activeTab === item.id ? 'bg-white text-orange-500' : 'bg-orange-500 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
                
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-4">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium text-sm">Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'orders' && (
              <div className="space-y-6">
                {/* Filter Tabs */}
                <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'all', label: 'All Orders', count: orderStats.total },
                      { id: 'processing', label: 'Processing', count: orderStats.processing },
                      { id: 'in transit', label: 'In Transit', count: orderStats.inTransit },
                      { id: 'delivered', label: 'Delivered', count: orderStats.delivered }
                    ].map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setOrderFilter(filter.id)}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                          orderFilter === filter.id
                            ? 'bg-orange-500 text-white shadow-sm'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {filter.label} ({filter.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Orders List */}
                <div className="space-y-4">
                  {filteredOrders.map((order) => {
                    const statusInfo = getStatusInfo(order.status);
                    const StatusIcon = statusInfo.icon;
                    
                    return (
                      <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                        {/* Order Header */}
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-lg ${statusInfo.color} border`}>
                                <StatusIcon className={`w-6 h-6 ${statusInfo.iconColor}`} />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900 text-lg">{order.id}</h3>
                                <p className="text-sm text-gray-600">Placed on {order.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className={`px-4 py-2 rounded-lg text-sm font-bold border ${statusInfo.color}`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Order Details */}
                        <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Total Amount</p>
                              <p className="text-2xl font-bold text-gray-900">{order.total}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Items</p>
                              <p className="text-lg font-semibold text-gray-900">{order.items.length} item{order.items.length > 1 ? 's' : ''}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Estimated Delivery</p>
                              <p className="text-lg font-semibold text-gray-900">{order.estimatedDelivery}</p>
                            </div>
                          </div>

                          {/* Items List */}
                          <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                            <p className="text-sm font-semibold text-gray-900 mb-3">Order Items:</p>
                            <div className="space-y-2">
                              {order.items.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center text-sm">
                                  <span className="text-gray-700">{item.name} × {item.quantity}</span>
                                  <span className="font-semibold text-gray-900">{item.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tracking */}
                          {order.status !== 'Cancelled' && (
                            <div className="flex items-center justify-between bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
                              <div className="flex items-center gap-3">
                                <Truck className="w-5 h-5 text-blue-600" />
                                <div>
                                  <p className="text-sm font-semibold text-blue-900">Tracking Number</p>
                                  <p className="text-sm text-blue-700 font-mono">{order.trackingNumber}</p>
                                </div>
                              </div>
                              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                                Track Order
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          )}

                          {/* Actions */}
                          <div className="flex flex-wrap gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors">
                              <Eye className="w-4 h-4" />
                              View Details
                            </button>
                            {order.status === 'Delivered' && (
                              <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-semibold transition-colors">
                                Download Invoice
                              </button>
                            )}
                            {order.status === 'Processing' && (
                              <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-red-600 border border-red-300 rounded-lg font-semibold transition-colors">
                                <X className="w-4 h-4" />
                                Cancel Order
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Profile Information</h3>
                  {!isEditing ? (
                    <button
                      onClick={handleEdit}
                      className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { field: 'firstName', label: 'First Name', icon: User },
                    { field: 'lastName', label: 'Last Name', icon: User },
                    { field: 'email', label: 'Email', icon: Mail },
                    { field: 'phone', label: 'Phone', icon: Phone },
                  ].map((item) => (
                    <div key={item.field}>
                      <label className="block text-sm font-medium text-gray-900 mb-2">{item.label}</label>
                      <div className="flex items-center gap-2 p-3 border-2 border-gray-200 rounded-lg bg-gray-50">
                        <item.icon className="w-5 h-5 text-gray-500" />
                        {isEditing ? (
                          <input
                            type="text"
                            value={tempData[item.field]}
                            onChange={(e) => handleInputChange(item.field, e.target.value)}
                            className="flex-1 bg-transparent outline-none text-gray-900"
                          />
                        ) : (
                          <span className="text-gray-900">{profileData[item.field]}</span>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Address</label>
                    <div className="flex items-center gap-2 p-3 border-2 border-gray-200 rounded-lg bg-gray-50">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      {isEditing ? (
                        <input
                          type="text"
                          value={tempData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="flex-1 bg-transparent outline-none text-gray-900"
                        />
                      ) : (
                        <span className="text-gray-900">{profileData.address}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Member Since</label>
                    <div className="flex items-center gap-2 p-3 border-2 border-gray-200 rounded-lg bg-gray-50">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-900">{profileData.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">My Wishlist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wishlist.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        <p className="text-gray-500 text-sm">{item.name}</p>
                        {item.discount && (
                          <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold">
                            {item.discount}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xl font-bold text-gray-900">{item.price}</span>
                          <span className={`text-sm font-semibold ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                            {item.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                            Add to Cart
                          </button>
                          <button className="p-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors">
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(activeTab === 'addresses' || activeTab === 'payment' || activeTab === 'notifications' || activeTab === 'settings') && (
              <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 text-center">
                <div className="max-w-md mx-auto">
                  <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {activeTab === 'addresses' && 'Saved Addresses'}
                    {activeTab === 'payment' && 'Payment Methods'}
                    {activeTab === 'notifications' && 'Notification Settings'}
                    {activeTab === 'settings' && 'Account Settings'}
                  </h3>
                  <p className="text-gray-600 mb-6">This section is under development. Check back soon!</p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Coming Soon
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}