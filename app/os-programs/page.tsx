'use client';

import { useState, useEffect } from 'react';

interface OSProgram {
  name: string;
  category: string;
  description: string;
  status: 'active' | 'installed' | 'available';
  path: string;
  icon: string;
}

const OS_PROGRAMS: OSProgram[] = [
  // Memory System
  {
    name: 'Memory System',
    category: 'Core',
    description: 'Central memory and coordination system for all Claude agents',
    status: 'active',
    path: '~/memory-system.sh',
    icon: '🧠'
  },
  {
    name: 'Memory Realtime Context',
    category: 'Core',
    description: 'Live context viewer for active Claude sessions',
    status: 'active',
    path: '~/memory-realtime-context.sh',
    icon: '📡'
  },
  {
    name: 'Memory Collaboration Dashboard',
    category: 'Core',
    description: 'Multi-agent collaboration and coordination dashboard',
    status: 'active',
    path: '~/memory-collaboration-dashboard.sh',
    icon: '🤝'
  },
  {
    name: 'Memory Sync Daemon',
    category: 'Core',
    description: 'Continuous synchronization of memory across sessions',
    status: 'active',
    path: '~/memory-sync-daemon.sh',
    icon: '🔄'
  },

  // Task Management
  {
    name: 'Memory Infinite Todos',
    category: 'Tasks',
    description: 'Infinite duration task tracking system',
    status: 'active',
    path: '~/memory-infinite-todos.sh',
    icon: '✅'
  },
  {
    name: 'Memory Task Marketplace',
    category: 'Tasks',
    description: 'Task sharing and assignment marketplace for Claude agents',
    status: 'active',
    path: '~/memory-task-marketplace.sh',
    icon: '🏪'
  },
  {
    name: 'Memory Infinite Todos Daemon',
    category: 'Tasks',
    description: 'Background daemon for infinite todo management',
    status: 'active',
    path: '~/memory-infinite-todos-daemon.sh',
    icon: '⚙️'
  },

  // Codex & Knowledge
  {
    name: 'Codex Verification Suite',
    category: 'Codex',
    description: 'Formal verification and component tracking (8,789+ components)',
    status: 'active',
    path: '~/blackroad-codex-verification-suite.sh',
    icon: '📚'
  },
  {
    name: 'Codex Oracle',
    category: 'Codex',
    description: 'AI-powered code search and analysis',
    status: 'active',
    path: '~/blackroad-codex-oracle.py',
    icon: '🔮'
  },
  {
    name: 'Codex Search',
    category: 'Codex',
    description: 'Fast semantic code search across all repositories',
    status: 'active',
    path: '~/blackroad-codex-search.py',
    icon: '🔍'
  },
  {
    name: 'Codex Illuminations',
    category: 'Codex',
    description: 'Pattern analysis and symbolic processing',
    status: 'active',
    path: '~/blackroad-codex-illuminations.py',
    icon: '✨'
  },

  // Claude Agents
  {
    name: 'Claude Session Init',
    category: 'Agents',
    description: 'Session initialization check for all Claude instances',
    status: 'active',
    path: '~/claude-session-init.sh',
    icon: '🚀'
  },
  {
    name: 'Claude AI Coordinator',
    category: 'Agents',
    description: 'Multi-agent coordination and task routing',
    status: 'active',
    path: '~/claude-ai-coordinator.sh',
    icon: '🎯'
  },
  {
    name: 'Claude Skill Matcher',
    category: 'Agents',
    description: 'Skills-based task assignment for Claude agents',
    status: 'active',
    path: '~/claude-skill-matcher.sh',
    icon: '🎓'
  },
  {
    name: 'Claude Collaboration Watch Bot',
    category: 'Agents',
    description: 'Real-time monitoring of multi-agent collaboration',
    status: 'active',
    path: '~/claude-collaboration-watch-bot.sh',
    icon: '👁️'
  },
  {
    name: 'Claude Group Chat',
    category: 'Agents',
    description: 'Multi-agent communication and coordination',
    status: 'active',
    path: '~/claude-group-chat.sh',
    icon: '💬'
  },
  {
    name: 'Claude Direct Messaging',
    category: 'Agents',
    description: 'Agent-to-agent direct communication',
    status: 'active',
    path: '~/claude-direct-messaging.sh',
    icon: '✉️'
  },

  // Traffic Light System
  {
    name: 'Traffic Light System',
    category: 'Status',
    description: 'Project status tracking (green/yellow/red)',
    status: 'active',
    path: '~/blackroad-traffic-light.sh',
    icon: '🚦'
  },
  {
    name: 'GreenLight Templates',
    category: 'Status',
    description: 'Deployment-ready project templates',
    status: 'active',
    path: '~/memory-greenlight-templates.sh',
    icon: '🟢'
  },
  {
    name: 'YellowLight Templates',
    category: 'Status',
    description: 'Projects needing attention templates',
    status: 'active',
    path: '~/memory-yellowlight-templates.sh',
    icon: '🟡'
  },
  {
    name: 'RedLight Templates',
    category: 'Status',
    description: 'Blocked project templates',
    status: 'active',
    path: '~/memory-redlight-templates.sh',
    icon: '🔴'
  },

  // Deployment & Infrastructure
  {
    name: 'BlackRoad Mass Deployer',
    category: 'Deploy',
    description: 'Mass deployment orchestration across all repos',
    status: 'active',
    path: '~/blackroad-mass-deployer.sh',
    icon: '🚀'
  },
  {
    name: 'BlackRoad Deploy System',
    category: 'Deploy',
    description: 'Automated deployment pipeline manager',
    status: 'active',
    path: '~/blackroad-deploy-system.sh',
    icon: '🔧'
  },
  {
    name: 'BlackRoad Autodeploy System',
    category: 'Deploy',
    description: 'Continuous deployment automation',
    status: 'active',
    path: '~/blackroad-autodeploy-system.sh',
    icon: '⚡'
  },
  {
    name: 'Deployment Verifier',
    category: 'Deploy',
    description: 'Post-deployment verification and health checks',
    status: 'active',
    path: '~/blackroad-deployment-verifier.sh',
    icon: '✔️'
  },

  // Monitoring & Analytics
  {
    name: 'BlackRoad Progress',
    category: 'Monitor',
    description: 'Project progress tracking and analytics',
    status: 'active',
    path: '~/blackroad-progress.sh',
    icon: '📊'
  },
  {
    name: 'BlackRoad Realtime Monitor',
    category: 'Monitor',
    description: 'Live system monitoring and alerts',
    status: 'active',
    path: '~/blackroad-realtime-monitor.sh',
    icon: '📈'
  },
  {
    name: 'BlackRoad Health Checks',
    category: 'Monitor',
    description: 'System health monitoring and diagnostics',
    status: 'active',
    path: '~/blackroad-health-checks.sh',
    icon: '💚'
  },
  {
    name: 'BlackRoad Visual Dashboard',
    category: 'Monitor',
    description: 'Visual analytics and system overview',
    status: 'active',
    path: '~/blackroad-visual-dashboard.sh',
    icon: '📺'
  },

  // Agent Registry & Coordination
  {
    name: 'BlackRoad Agent Registry',
    category: 'Registry',
    description: 'Central registry for all AI agents',
    status: 'active',
    path: '~/blackroad-agent-registry.sh',
    icon: '📋'
  },
  {
    name: 'BlackRoad Agent Ecosystem',
    category: 'Registry',
    description: 'Agent ecosystem management and orchestration',
    status: 'active',
    path: '~/blackroad-agent-ecosystem.sh',
    icon: '🌐'
  },
  {
    name: 'BlackRoad AI Orchestrator',
    category: 'Registry',
    description: 'AI workload orchestration and routing',
    status: 'active',
    path: '~/blackroad-ai-orchestrator.sh',
    icon: '🎼'
  },

  // Testing & Quality
  {
    name: 'BlackRoad Test Suite',
    category: 'Testing',
    description: 'Comprehensive testing framework',
    status: 'active',
    path: '~/blackroad-test-suite.sh',
    icon: '🧪'
  },
  {
    name: 'BlackRoad E2E Testing Suite',
    category: 'Testing',
    description: 'End-to-end testing automation',
    status: 'active',
    path: '~/blackroad-e2e-testing-suite.sh',
    icon: '🔬'
  },

  // Trinity System
  {
    name: 'Trinity Codex Integration',
    category: 'Trinity',
    description: 'Light Trinity + Codex integration layer',
    status: 'active',
    path: '~/trinity-codex-integration.sh',
    icon: '🌌'
  },
  {
    name: 'Trinity Check Compliance',
    category: 'Trinity',
    description: 'Trinity system compliance verification',
    status: 'active',
    path: '~/trinity-check-compliance.sh',
    icon: '⚖️'
  },

  // Achievements & Gamification
  {
    name: 'Claude Achievements',
    category: 'Social',
    description: 'Achievement tracking for Claude agents',
    status: 'active',
    path: '~/claude-achievements.sh',
    icon: '🏆'
  },
  {
    name: 'Claude Leaderboard',
    category: 'Social',
    description: 'Agent performance leaderboards',
    status: 'active',
    path: '~/claude-leaderboard.sh',
    icon: '👑'
  },

  // Communication & Broadcasting
  {
    name: 'Memory TIL Broadcast',
    category: 'Comms',
    description: 'Today I Learned broadcasting system',
    status: 'active',
    path: '~/memory-til-broadcast.sh',
    icon: '📢'
  },
  {
    name: 'Memory Dependency Notify',
    category: 'Comms',
    description: 'Dependency change notification system',
    status: 'active',
    path: '~/memory-dependency-notify.sh',
    icon: '🔔'
  },
  {
    name: 'Memory Collaboration Reminder',
    category: 'Comms',
    description: 'Collaboration reminders and nudges',
    status: 'active',
    path: '~/memory-collaboration-reminder.sh',
    icon: '⏰'
  },

  // Infrastructure Tools
  {
    name: 'BlackRoad Pi Cluster',
    category: 'Infra',
    description: 'Raspberry Pi cluster management',
    status: 'active',
    path: '~/blackroad-pi-cluster.sh',
    icon: '🥧'
  },
  {
    name: 'BlackRoad Mesh Join',
    category: 'Infra',
    description: 'Mesh network join and configuration',
    status: 'active',
    path: '~/blackroad-mesh-join.sh',
    icon: '🕸️'
  },
  {
    name: 'BlackRoad Self Healing',
    category: 'Infra',
    description: 'Automatic system recovery and healing',
    status: 'active',
    path: '~/blackroad-self-healing.sh',
    icon: '🔄'
  },
  {
    name: 'BlackRoad Webhook Receiver',
    category: 'Infra',
    description: 'Webhook handling and processing',
    status: 'active',
    path: '~/blackroad-webhook-receiver.sh',
    icon: '🪝'
  },

  // PR & Git Coordination
  {
    name: 'Claude PR Coordinator',
    category: 'Git',
    description: 'Pull request coordination for multiple agents',
    status: 'active',
    path: '~/claude-pr-coordinator.sh',
    icon: '🔀'
  },
  {
    name: 'BlackRoad PR Coordinator',
    category: 'Git',
    description: 'Organization-wide PR management',
    status: 'active',
    path: '~/blackroad-pr-coordinator.sh',
    icon: '🔀'
  },

  // AI & Predictive
  {
    name: 'BlackRoad Predictive AI',
    category: 'AI',
    description: 'Predictive analytics and forecasting',
    status: 'active',
    path: '~/blackroad-predictive-ai.sh',
    icon: '🔮'
  },

  // Master Control
  {
    name: 'BlackRoad Master Control',
    category: 'Control',
    description: 'Central control panel for all systems',
    status: 'active',
    path: '~/blackroad-master-control.sh',
    icon: '🎛️'
  },
  {
    name: 'BlackRoad CLI',
    category: 'Control',
    description: 'Unified command-line interface',
    status: 'active',
    path: '~/blackroad-cli.sh',
    icon: '⌨️'
  },
];

export default function OSProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['all', ...new Set(OS_PROGRAMS.map(p => p.category))];

  const filteredPrograms = OS_PROGRAMS.filter(program => {
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesSearch =
      program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.path.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = {
    total: OS_PROGRAMS.length,
    active: OS_PROGRAMS.filter(p => p.status === 'active').length,
    categories: categories.length - 1,
  };

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            🌌 BlackRoad Operating System Programs
          </h1>
          <p className="text-gray-300 text-lg">
            Comprehensive suite of tools powering the BlackRoad ecosystem
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6">
            <div className="text-4xl font-bold text-cyan-400">{stats.total}</div>
            <div className="text-gray-400 mt-2">Total Programs</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
            <div className="text-4xl font-bold text-green-400">{stats.active}</div>
            <div className="text-gray-400 mt-2">Active Programs</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
            <div className="text-4xl font-bold text-purple-400">{stats.categories}</div>
            <div className="text-gray-400 mt-2">Categories</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search programs..."
              className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute right-4 top-4 text-2xl">🔍</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{program.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  program.status === 'active'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {program.status}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">
                {program.name}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {program.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded">
                    {program.category}
                  </span>
                </div>
                <div className="text-xs text-gray-500 font-mono truncate">
                  {program.path}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No programs found</h3>
            <p className="text-gray-500">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-500">
            <p className="mb-2">
              Part of the <span className="text-cyan-400 font-semibold">BlackRoad Operating System</span>
            </p>
            <p className="text-sm">
              {stats.total} Programs • {stats.categories} Categories • 100% Active
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
