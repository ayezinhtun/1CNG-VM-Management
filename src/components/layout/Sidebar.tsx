import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Server, 
  Users, 
  Plus, 
  FileText,
  Activity,
  Upload,
  Download,
  Shield,
  BarChart3,
  Clock
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'clusters', label: 'Cluster Management', icon: Server },
  { id: 'nodes', label: 'Node Management', icon: Server },
  { id: 'vms', label: 'VM Management', icon: Server },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'gp-accounts', label: 'GP Accounts', icon: Shield },
  { id: 'contracts', label: 'Contracts', icon: FileText },
  { id: 'create-vm', label: 'Create VM', icon: Plus },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'activity-logs', label: 'Activity Logs', icon: Clock },
  { id: 'audit-logs', label: 'Audit Logs', icon: Activity },
  { id: 'import-export', label: 'Import/Export', icon: FileText }
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <motion.aside
      className="w-64 bg-white border-r border-gray-200 min-h-screen"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                isActive 
                  ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              whileHover={{ x: isActive ? 0 : 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>
    </motion.aside>
  );
};