'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface QuickStat {
  label: string;
  value: string | number;
  icon: string;
  color: string;
  link?: string;
}

interface ResourceCategory {
  name: string;
  icon: string;
  count: number;
  description: string;
  link: string;
}

export default function Home() {
  const quickStats: QuickStat[] = [
    { label: 'Organizations', value: '15', icon: '🏢', color: 'cyan', link: '/organizations' },
    { label: 'Repositories', value: '113+', icon: '📦', color: 'purple', link: '/repositories' },
    { label: 'Total Files', value: '17,681+', icon: '📄', color: 'green', link: '/files' },
    { label: 'OS Programs', value: '60+', icon: '⚙️', color: 'blue', link: '/os-programs' },
    { label: 'Active Agents', value: '12', icon: '🤖', color: 'pink', link: '/agents' },
    { label: 'Codex Components', value: '8,789', icon: '📚', color: 'orange', link: '/codex' },
  ];

  const resourceCategories: ResourceCategory[] = [
    {
      name: 'OS Programs',
      icon: '⚙️',
      count: 60,
      description: 'System tools, scripts, and automation',
      link: '/os-programs'
    },
    {
      name: 'Templates',
      icon: '📋',
      count: 103,
      description: 'GreenLight, YellowLight, RedLight templates',
      link: '/templates'
    },
    {
      name: 'Documentation',
      icon: '📚',
      count: 200,
      description: 'Guides, references, and runbooks',
      link: '/docs'
    },
    {
      name: 'Workflows',
      icon: '🔄',
      count: 45,
      description: 'GitHub Actions and automation workflows',
      link: '/workflows'
    },
    {
      name: 'Infrastructure',
      icon: '🏗️',
      count: 25,
      description: 'Servers, services, and deployments',
      link: '/infrastructure'
    },
    {
      name: 'AI Systems',
      icon: '🧠',
      count: 8,
      description: 'Codex, Lucidia, PRISM, and agents',
      link: '/ai-systems'
    }
  ];

  const recentActivity = [
    { type: 'deploy', message: 'Deployed ecosystem-dashboard to Cloudflare Pages', time: '5 min ago', icon: '🚀' },
    { type: 'update', message: 'Updated Memory System with session init protocol', time: '15 min ago', icon: '🧠' },
    { type: 'success', message: 'All traffic lights checked - 100% green', time: '1 hour ago', icon: '🟢' },
    { type: 'agent', message: 'New Claude agent registered: winston-quantum-watcher', time: '2 hours ago', icon: '🤖' },
    { type: 'codex', message: 'Codex verification complete: 8,789 components', time: '3 hours ago', icon: '📚' },
  ];

  const systemHealth = [
    { name: 'Memory System', status: 'operational', uptime: '99.9%', icon: '🧠' },
    { name: 'Codex Oracle', status: 'operational', uptime: '99.8%', icon: '🔮' },
    { name: 'Traffic Lights', status: 'operational', uptime: '100%', icon: '🚦' },
    { name: 'Task Marketplace', status: 'operational', uptime: '99.5%', icon: '🏪' },
    { name: 'Agent Registry', status: 'operational', uptime: '99.7%', icon: '📋' },
    { name: 'Deploy System', status: 'operational', uptime: '98.9%', icon: '🚀' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              🌌 BlackRoad Ecosystem Dashboard
            </h1>
            <p className="text-2xl text-gray-300 mb-6">
              Project Management • Resource Hub • Progress Tracking
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/os-programs"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all"
              >
                Browse OS Programs
              </Link>
              <Link
                href="/templates"
                className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-all"
              >
                View Templates
              </Link>
              <Link
                href="/docs"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-all"
              >
                Documentation
              </Link>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {quickStats.map((stat, idx) => (
              <Link
                key={idx}
                href={stat.link || '#'}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1 text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-16">
        {/* Resource Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span>📁</span> Resource Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, idx) => (
              <Link
                key={idx}
                href={category.link}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{category.icon}</div>
                  <div className="text-2xl font-bold text-purple-400">{category.count}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Recent Activity */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>📊</span> Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-lg">
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <p className="text-white mb-1">{activity.message}</p>
                    <p className="text-gray-500 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Health */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>💚</span> System Health
            </h2>
            <div className="space-y-4">
              {systemHealth.map((system, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{system.icon}</div>
                    <div>
                      <p className="text-white font-medium">{system.name}</p>
                      <p className="text-gray-500 text-xs">Uptime: {system.uptime}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                    ✓ {system.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access Tools */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span>🔧</span> Quick Access Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all text-left">
              <div className="text-3xl mb-2">🧠</div>
              <div className="font-semibold">Memory System</div>
              <div className="text-xs text-gray-400">View logs & context</div>
            </button>
            <button className="p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all text-left">
              <div className="text-3xl mb-2">🚦</div>
              <div className="font-semibold">Traffic Lights</div>
              <div className="text-xs text-gray-400">Check project status</div>
            </button>
            <button className="p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all text-left">
              <div className="text-3xl mb-2">📚</div>
              <div className="font-semibold">Codex Search</div>
              <div className="text-xs text-gray-400">Find components</div>
            </button>
            <button className="p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all text-left">
              <div className="text-3xl mb-2">🏪</div>
              <div className="font-semibold">Task Marketplace</div>
              <div className="text-xs text-gray-400">Browse tasks</div>
            </button>
            <button className="p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all text-left">
              <div className="text-3xl mb-2">🤖</div>
              <div className="font-semibold">Agent Registry</div>
              <div className="text-xs text-gray-400">View active agents</div>
            </button>
            <button className="p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all text-left">
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-semibold">Deploy System</div>
              <div className="text-xs text-gray-400">Manage deployments</div>
            </button>
            <button className="p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all text-left">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-semibold">Progress Tracker</div>
              <div className="text-xs text-gray-400">View progress</div>
            </button>
            <button className="p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-all text-left">
              <div className="text-3xl mb-2">🔍</div>
              <div className="font-semibold">Global Search</div>
              <div className="text-xs text-gray-400">Find anything</div>
            </button>
          </div>
        </div>

        {/* Organization Status */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span>🏢</span> Organization Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'BlackRoad-OS', repos: 77, status: 'green' },
              { name: 'BlackRoad-AI', repos: 3, status: 'green' },
              { name: 'BlackRoad-Cloud', repos: 3, status: 'green' },
              { name: 'BlackRoad-Security', repos: 4, status: 'green' },
              { name: 'BlackRoad-Labs', repos: 5, status: 'yellow' },
              { name: 'BlackRoad-Education', repos: 2, status: 'green' },
              { name: 'BlackRoad-Foundation', repos: 3, status: 'green' },
              { name: 'BlackRoad-Media', repos: 4, status: 'green' },
              { name: 'BlackRoad-Hardware', repos: 2, status: 'green' },
            ].map((org, idx) => (
              <div
                key={idx}
                className="p-4 bg-gray-700/30 rounded-lg flex justify-between items-center hover:bg-gray-700/50 transition-all"
              >
                <div>
                  <div className="font-semibold">{org.name}</div>
                  <div className="text-sm text-gray-400">{org.repos} repositories</div>
                </div>
                <div className={`text-2xl ${
                  org.status === 'green' ? '' : org.status === 'yellow' ? '' : ''
                }`}>
                  {org.status === 'green' ? '🟢' : org.status === 'yellow' ? '🟡' : '🔴'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-500">
            <p className="mb-2 text-lg">
              <span className="text-cyan-400 font-semibold">BlackRoad Operating System</span> • Dashboard v2.0
            </p>
            <p className="text-sm">
              15 Organizations • 113+ Repositories • 17,681+ Files • 60+ OS Programs • 8,789 Codex Components
            </p>
            <p className="text-xs mt-4">
              Last updated: {new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
