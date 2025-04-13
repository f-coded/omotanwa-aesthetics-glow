
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingBag, 
  Settings, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're on the main admin page
  const isRootAdminPath = location.pathname === '/admin' || location.pathname === '/admin/';
  
  // Redirect to dashboard if on root admin path
  React.useEffect(() => {
    if (isRootAdminPath) {
      navigate('/admin/dashboard');
    }
  }, [isRootAdminPath, navigate]);
  
  const navigationItems = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: <ShoppingBag size={18} />, label: 'Products', path: '/admin/products' },
    { icon: <Package size={18} />, label: 'Orders', path: '/admin/orders' },
    { icon: <Users size={18} />, label: 'Customers', path: '/admin/customers' },
    { icon: <Settings size={18} />, label: 'Settings', path: '/admin/settings' }
  ];
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon"
          onClick={toggleSidebar}
          className="bg-white shadow-md"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-serif font-medium">Omotanwa Admin</h1>
          </Link>
        </div>
        
        <nav className="mt-6">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-6 py-3 text-sm ${
                      isActive 
                        ? 'bg-brand-100 text-brand-700 font-medium' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Link 
            to="/"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <LogOut size={18} className="mr-3" />
            <span>Exit Admin</span>
          </Link>
        </div>
      </aside>
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Main Content */}
      <main className="md:ml-64 min-h-screen p-6">
        <Routes>
          <Route path="/dashboard" element={<AdminDashboardContent />} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/orders" element={<AdminOrders />} />
          <Route path="/customers" element={<AdminCustomers />} />
          <Route path="/settings" element={<AdminSettings />} />
        </Routes>
      </main>
    </div>
  );
};

// Admin Dashboard Content
const AdminDashboardContent: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-2xl font-medium mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Orders', value: '157', icon: <ShoppingBag />, color: 'bg-blue-100 text-blue-600' },
          { title: 'Total Sales', value: '$12,426', icon: <ShoppingBag />, color: 'bg-green-100 text-green-600' },
          { title: 'Customers', value: '832', icon: <Users />, color: 'bg-purple-100 text-purple-600' },
          { title: 'Products', value: '24', icon: <Package />, color: 'bg-amber-100 text-amber-600' },
        ].map((card, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">{card.title}</p>
                <h3 className="text-2xl font-medium">{card.value}</h3>
              </div>
              <div className={`p-3 rounded-full ${card.color}`}>
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Recent Orders</h2>
          {/* Order content would go here */}
          <p className="text-muted-foreground">No orders to display</p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Top Products</h2>
          {/* Products content would go here */}
          <p className="text-muted-foreground">No products to display</p>
        </div>
      </div>
    </motion.div>
  );
};

// Admin Products Page
const AdminProducts: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-2xl font-medium mb-6">Products</h1>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <p className="text-muted-foreground">Product management functionality will be implemented here.</p>
      </div>
    </motion.div>
  );
};

// Admin Orders Page
const AdminOrders: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-2xl font-medium mb-6">Orders</h1>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <p className="text-muted-foreground">Order management functionality will be implemented here.</p>
      </div>
    </motion.div>
  );
};

// Admin Customers Page
const AdminCustomers: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-2xl font-medium mb-6">Customers</h1>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <p className="text-muted-foreground">Customer management functionality will be implemented here.</p>
      </div>
    </motion.div>
  );
};

// Admin Settings Page
const AdminSettings: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-2xl font-medium mb-6">Settings</h1>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <p className="text-muted-foreground">Settings functionality will be implemented here.</p>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
