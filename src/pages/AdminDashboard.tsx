
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
  X,
  Plus,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductUpload from '@/components/admin/ProductUpload';
import { toast } from 'sonner';

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
            <h1 className="text-xl font-goudy font-medium">Omotanwa Admin</h1>
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
      <main className="md:ml-64 min-h-screen p-4 md:p-6">
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
      <h1 className="text-2xl font-goudy mb-6">Dashboard</h1>
      
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
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-3">Order ID</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Total</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { id: 'OMA-123456', customer: 'John Doe', status: 'Completed', total: '$129.99' },
                { id: 'OMA-123457', customer: 'Jane Smith', status: 'Processing', total: '$79.50' },
                { id: 'OMA-123458', customer: 'Robert Johnson', status: 'Shipped', total: '$245.00' },
              ].map((order, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="py-3">{order.id}</td>
                  <td className="py-3">{order.customer}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Top Products</h2>
          {[
            { name: 'Hydrating Facial Cleanser', sold: 42, revenue: '$2,520' },
            { name: 'Vitamin C Serum', sold: 38, revenue: '$3,420' },
            { name: 'Anti-Aging Night Cream', sold: 29, revenue: '$2,030' },
          ].map((product, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-100 py-3 last:border-0">
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.sold} units sold</p>
              </div>
              <div className="text-right">
                <span className="font-medium">{product.revenue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Admin Products Page
const AdminProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'add'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const sampleProducts = [
    {
      id: '1',
      name: 'Hydrating Facial Cleanser',
      category: 'cleansers',
      price: 39.99,
      stock: 32,
      status: 'Active'
    },
    {
      id: '2',
      name: 'Vitamin C Serum',
      category: 'serums',
      price: 89.99,
      stock: 18,
      status: 'Active'
    },
    {
      id: '3',
      name: 'Anti-Aging Night Cream',
      category: 'moisturizers',
      price: 69.99,
      stock: 24,
      status: 'Active'
    },
    {
      id: '4',
      name: 'Rejuvenating Eye Cream',
      category: 'moisturizers',
      price: 49.99,
      stock: 0,
      status: 'Out of Stock'
    }
  ];

  const handleProductAdded = () => {
    setActiveTab('all');
    toast.success("Product added and will appear in the shop!");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-goudy">Products</h1>
        
        <div className="flex gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-medium"
            />
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <button
            onClick={() => setActiveTab('add')}
            className="btn-primary bg-gold-medium hover:bg-gold-dark py-2 flex items-center"
          >
            <Plus size={18} className="mr-1" />
            New Product
          </button>
        </div>
      </div>
      
      <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`py-3 border-b-2 ${
              activeTab === 'all' 
                ? 'border-gold-dark text-foreground font-medium' 
                : 'border-transparent text-muted-foreground'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`py-3 border-b-2 ${
              activeTab === 'add' 
                ? 'border-gold-dark text-foreground font-medium' 
                : 'border-transparent text-muted-foreground'
            }`}
          >
            Add New Product
          </button>
        </div>
      </div>
      
      {activeTab === 'all' ? (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sampleProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{product.name}</div>
                      <div className="text-xs text-gray-500">ID: {product.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap capitalize">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.stock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <ProductUpload onProductAdded={handleProductAdded} />
      )}
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
      <h1 className="text-2xl font-goudy mb-6">Orders</h1>
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
      <h1 className="text-2xl font-goudy mb-6">Customers</h1>
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
      <h1 className="text-2xl font-goudy mb-6">Settings</h1>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <p className="text-muted-foreground">Settings functionality will be implemented here.</p>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
