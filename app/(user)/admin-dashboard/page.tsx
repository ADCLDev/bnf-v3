// app/(user)/admin-dashboard/page.tsx
'use client'
import React, { useState } from 'react';
import { BarChart, AlertCircle, Package, Type, Book, Shield, Settings, Users, DollarSign, FileText, Upload, Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('overview');
  
  const stats = {
    totalRevenue: '৳125,750',
    totalUsers: '2,340',
    pendingFonts: '12',
    activeSubscriptions: '543'
  };

  const [subscriptionPackages] = useState([
    { id: 1, name: 'Basic', price: '৳499/mo', features: ['100 downloads/month', 'Basic type tools', 'Email support'] },
    { id: 2, name: 'Pro', price: '৳999/mo', features: ['Unlimited downloads', 'Advanced type tools', 'Priority support'] }
  ]);

  const [giftCardPackages] = useState([
    { id: 1, amount: '৳500', bonus: '৳50' },
    { id: 2, amount: '৳1000', bonus: '৳150' }
  ]);

  const [typeToolPackages] = useState([
    { id: 1, type: 'Anonymous', limits: { daily: 5, textLength: 50 } },
    { id: 2, type: 'Logged In', limits: { daily: 20, textLength: 200 } }
  ]);

  const [faqs] = useState([
    { id: 1, title: 'How to download fonts?', category: 'Usage', type: 'video', content: 'guide.mp4' },
    { id: 2, title: 'Licensing terms', category: 'Legal', type: 'text', content: 'Our licensing terms...' }
  ]);

  const [legalDocs] = useState({
    tos: { title: 'Terms of Service', content: '...' },
    privacy: { title: 'Privacy Policy', content: '...' },
    refund: { title: 'Refund Policy', content: '...' },
    license: { title: 'License Agreement', content: '...' },
    contributor: { title: 'Contributor Policy', content: '...' }
  });

  const [fontSubmissions] = useState([
    {
      id: 'SUB-001',
      name: 'Elegance Sans',
      creator: 'John Doe',
      submittedDate: '2024-12-14',
      status: 'pending',
      styles: ['Regular', 'Bold', 'Italic'],
      sampleText: 'The quick brown fox jumps over the lazy dog',
      technicalRequirements: true,
      characterSetComplete: true,
      licenseTermsValid: true,
      qualityStandards: false,
      preview: '/api/placeholder/400/200'
    },
    {
      id: 'SUB-002',
      name: 'Modern Script',
      creator: 'Jane Smith',
      submittedDate: '2024-12-13',
      status: 'pending',
      styles: ['Regular'],
      sampleText: 'The quick brown fox jumps over the lazy dog',
      technicalRequirements: true,
      characterSetComplete: false,
      licenseTermsValid: true,
      qualityStandards: true,
      preview: '/api/placeholder/400/200'
    }
  ]);

  const [ownFonts] = useState([
    {
      id: 'FONT-001',
      name: 'Admin Sans',
      styles: ['Regular', 'Bold'],
      status: 'published',
      downloads: 245,
      revenue: '৳12,500',
      lastUpdated: '2024-12-10'
    }
  ]);

  const handleAddPackage = () => {
    console.log('Add package clicked');
  };

  const handleEdit = (id: number) => {
    console.log('Edit clicked for id:', id);
  };

  const handleDelete = (id: number) => {
    console.log('Delete clicked for id:', id);
  };

  const handleApprove = (submissionId: string) => {
    console.log('Approving submission:', submissionId);
  };

  const handleReject = (submissionId: string) => {
    console.log('Rejecting submission:', submissionId);
  };

  const handleAddFeedback = (submissionId: string) => {
    console.log('Adding feedback for:', submissionId);
  };

  const renderContent = () => {
    switch(selectedSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalRevenue}</div>
                  <p className="text-xs text-muted-foreground">+10% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalUsers}</div>
                  <p className="text-xs text-muted-foreground">+82 this week</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Pending Fonts</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.pendingFonts}</div>
                  <p className="text-xs text-muted-foreground">Needs review</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.activeSubscriptions}</div>
                  <p className="text-xs text-muted-foreground">+23 new this month</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button 
                  className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg flex items-center gap-2"
                  onClick={() => setSelectedSection('subscriptions')}
                >
                  <Package className="h-5 w-5 text-blue-500" />
                  <span>Manage Subscriptions</span>
                </button>
                <button 
                  className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg flex items-center gap-2"
                  onClick={() => setSelectedSection('typetools')}
                >
                  <Type className="h-5 w-5 text-purple-500" />
                  <span>Configure Type Tools</span>
                </button>
                <button 
                  className="p-4 bg-green-50 hover:bg-green-100 rounded-lg flex items-center gap-2"
                  onClick={() => setSelectedSection('faq')}
                >
                  <Book className="h-5 w-5 text-green-500" />
                  <span>Update FAQs</span>
                </button>
                <button 
                  className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg flex items-center gap-2"
                  onClick={() => setSelectedSection('legal')}
                >
                  <Shield className="h-5 w-5 text-orange-500" />
                  <span>Review Legal Docs</span>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <Card>
                <CardContent className="p-4">
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>New font submission received</span>
                      </div>
                      <span className="text-sm text-gray-500">2 minutes ago</span>
                    </li>
                    <li className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>New subscription purchase</span>
                      </div>
                      <span className="text-sm text-gray-500">15 minutes ago</span>
                    </li>
                    <li className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>Gift card redeemed</span>
                      </div>
                      <span className="text-sm text-gray-500">1 hour ago</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Type tool usage limit updated</span>
                      </div>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'fontReview':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Font Submissions Review</h2>
            <div className="grid grid-cols-1 gap-6">
              {fontSubmissions.map(submission => (
                <Card key={submission.id}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{submission.name}</CardTitle>
                      <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        Pending Review
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">Submission Details</h4>
                          <p>Creator: {submission.creator}</p>
                          <p>Submitted: {submission.submittedDate}</p>
                          <p>Styles: {submission.styles.join(', ')}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Requirements Check</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded-full ${submission.technicalRequirements ? 'bg-green-500' : 'bg-red-500'}`}></div>
                              <span>Technical Requirements</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded-full ${submission.characterSetComplete ? 'bg-green-500' : 'bg-red-500'}`}></div>
                              <span>Character Set Complete</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded-full ${submission.licenseTermsValid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                              <span>License Terms Valid</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded-full ${submission.qualityStandards ? 'bg-green-500' : 'bg-red-500'}`}></div>
                              <span>Quality Standards Met</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <img src={submission.preview} alt="Font Preview" className="w-full rounded-lg" />
                        <p className="font-mono text-sm">{submission.sampleText}</p>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleApprove(submission.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                          >
                            <Check className="w-4 h-4" />
                            Approve
                          </button>
                          <button 
                            onClick={() => handleReject(submission.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                          >
                            <X className="w-4 h-4" />
                            Reject
                          </button>
                          <button 
                            onClick={() => handleAddFeedback(submission.id)}
                            className="px-4 py-2 border rounded hover:bg-gray-50"
                          >
                            Add Feedback
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'ownFonts':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Admin Fonts</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload New Font
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ownFonts.map(font => (
                <Card key={font.id}>
                  <CardHeader>
                    <CardTitle>{font.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>Styles: {font.styles.join(', ')}</p>
                      <p>Downloads: {font.downloads}</p>
                      <p>Revenue: {font.revenue}</p>
                      <p>Last Updated: {font.lastUpdated}</p>
                      <div className="mt-4 space-x-2">
                        <button className="text-blue-500 hover:underline">Edit</button>
                        <button className="text-green-500 hover:underline">Analytics</button>
                        <button className="text-red-500 hover:underline">Unpublish</button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'subscriptions':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Subscription Packages</h2>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddPackage}
              >
                Add Package
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subscriptionPackages.map(pkg => (
                <Card key={pkg.id}>
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <div className="text-xl font-bold">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-4 space-x-2">
                      <button 
                        className="text-blue-500 hover:underline"
                        onClick={() => handleEdit(pkg.id)}
                      >
                        Edit
                      </button>
                      <button 
                        className="text-red-500 hover:underline"
                        onClick={() => handleDelete(pkg.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'giftcards':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Gift Card Packages</h2>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddPackage}
              >
                Add Gift Card
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {giftCardPackages.map(card => (
                <Card key={card.id}>
                  <CardHeader>
                    <CardTitle>Gift Card</CardTitle>
                    <div className="text-xl font-bold">{card.amount}</div>
                  </CardHeader>
                  <CardContent>
                    <p>Bonus amount: {card.bonus}</p>
                    <div className="mt-4 space-x-2">
                      <button 
                        className="text-blue-500 hover:underline"
                        onClick={() => handleEdit(card.id)}
                      >
                        Edit
                      </button>
                      <button 
                        className="text-red-500 hover:underline"
                        onClick={() => handleDelete(card.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'typetools':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Type Tool Packages</h2>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddPackage}
              >
                Add Package
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {typeToolPackages.map(pkg => (
                <Card key={pkg.id}>
                  <CardHeader>
                    <CardTitle>{pkg.type} User Limits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>Daily Usage: {pkg.limits.daily} tests</p>
                      <p>Text Length: {pkg.limits.textLength} characters</p>
                    </div>
                    <div className="mt-4 space-x-2">
                      <button 
                        className="text-blue-500 hover:underline"
                        onClick={() => handleEdit(pkg.id)}
                      >
                        Edit
                      </button>
                      <button 
                        className="text-red-500 hover:underline"
                        onClick={() => handleDelete(pkg.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">FAQ Management</h2>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddPackage}
              >
                Add FAQ
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map(faq => (
                <Card key={faq.id}>
                  <CardHeader>
                    <CardTitle>{faq.title}</CardTitle>
                    <div className="text-sm text-gray-500">Category: {faq.category}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>Type: {faq.type}</div>
                      <div className="truncate">{faq.content}</div>
                    </div>
                    <div className="mt-4 space-x-2">
                      <button 
                        className="text-blue-500 hover:underline"
                        onClick={() => handleEdit(faq.id)}
                      >
                        Edit
                      </button>
                      <button 
                        className="text-red-500 hover:underline"
                        onClick={() => handleDelete(faq.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'legal':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Legal Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(legalDocs).map(([key, doc]) => (
                <Card key={key}>
                  <CardHeader>
                    <CardTitle>{doc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="truncate">{doc.content}</div>
                    </div>
                    <div className="mt-4 space-x-2">
                      <button 
                        className="text-blue-500 hover:underline"
                        onClick={() => handleEdit(parseInt(key))}
                      >
                        Edit
                      </button>
                      <button className="text-green-500 hover:underline">Preview</button>
                      <button 
                        className="text-red-500 hover:underline"
                        onClick={() => handleDelete(parseInt(key))}
                      >
                        Delete
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <AlertCircle className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-2">
            <div className="bg-white rounded-lg p-4 space-y-2">
              <button
                onClick={() => setSelectedSection('overview')}
                className={`w-full flex items-center gap-2 p-2 rounded ${
                  selectedSection === 'overview' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <BarChart className="h-4 w-4" />
                <span>Overview</span>
              </button>
              <button
                onClick={() => setSelectedSection('fontReview')}
                className={`w-full flex items-center gap-2 p-2 rounded ${
                  selectedSection === 'fontReview' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <FileText className="h-4 w-4" />
                <span>Font Review</span>
              </button>
              <button
                onClick={() => setSelectedSection('ownFonts')}
                className={`w-full flex items-center gap-2 p-2 rounded ${
                  selectedSection === 'ownFonts' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <Upload className="h-4 w-4" />
                <span>Own Fonts</span>
              </button>
              <button
                onClick={() => setSelectedSection('subscriptions')}
                className={`w-full flex items-center gap-2 p-2 rounded ${
                  selectedSection === 'subscriptions' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <Package className="h-4 w-4" />
                <span>Subscriptions</span>
              </button>
              <button
                onClick={() => setSelectedSection('giftcards')}
                className={`w-full flex items-center gap-2 p-2 rounded ${
                  selectedSection === 'giftcards' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <Package className="h-4 w-4" />
                <span>Gift Cards</span>
              </button>
              <button
                onClick={() => setSelectedSection('typetools')}
                className={`w-full flex items-center gap-2 p-2 rounded ${
                  selectedSection === 'typetools' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <Type className="h-4 w-4" />
                <span>Type Tools</span>
              </button>
              <button
                onClick={() => setSelectedSection('faq')}
                className={`w-full flex items-center gap-2 p-2 rounded ${
                  selectedSection === 'faq' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <Book className="h-4 w-4" />
                <span>FAQ</span>
              </button>
              <button
                onClick={() => setSelectedSection('legal')}
                className={`w-full flex items-center gap-2 p-2 rounded ${
                  selectedSection === 'legal' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <Shield className="h-4 w-4" />
                <span>Legal</span>
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-10">
            <div className="bg-white rounded-lg p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;