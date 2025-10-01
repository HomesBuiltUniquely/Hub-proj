"use client"

import React, { useState, useEffect } from "react";

type Post = { 
    id: number; 
    title: string; 
    date: string; 
    readTime: string; 
    img: string;
    path?: string;
};

type TrendingItem = {
    id: number;
    title: string;
    subtitle: string;
    readTime: string;
    date: string;
};

export default function BlogAdmin() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [editingPost, setEditingPost] = useState<Post | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [showTrendingForm, setShowTrendingForm] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginError, setLoginError] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        readTime: "", 
        img: "",
        path: ""
    });
    
    const [trendingData, setTrendingData] = useState<TrendingItem[]>([]);
    const [editingTrending, setEditingTrending] = useState<TrendingItem | null>(null);
    const [trendingFormData, setTrendingFormData] = useState({
        title: "",
        subtitle: "",
        readTime: "",
        date: ""
    });

    // Check if user is already authenticated
    useEffect(() => {
        const authStatus = localStorage.getItem('blogAdminAuth');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    // Load posts from localStorage on component mount
    useEffect(() => {
        if (isAuthenticated) {
            const savedPosts = localStorage.getItem('blogPosts');
            if (savedPosts) {
                setPosts(JSON.parse(savedPosts));
            } else {
                // If no saved posts, start with default posts so admin can see and manage them
                const defaultPosts: Post[] = [
                    { id: 1, title: "Designing the Heart of Your Home: Bedroom Ideas That Inspire", date: "July 26, 2025", readTime: "18 mins read", img: "/1.png", path: "/Blog/[id]/Blog2" },
                    { id: 2, title: "Modern Kitchen Designs You'll Love", date: "July 28, 2025", readTime: "12 mins read", img: "/2.png", path: "/Blog/[id]/Blog3" },
                    { id: 3, title: "Living Room Makeovers With a Wow Factor", date: "July 30, 2025", readTime: "10 mins read", img: "/3.png", path: "/Blog/[id]/Blog4" },
                    { id: 4, title: "Bathroom Design Trends for 2025", date: "August 1, 2025", readTime: "8 mins read", img: "/bn.jpg", path: "/Blog/[id]/Blog5" },
                    { id: 5, title: "Small Space Interior Solutions", date: "August 3, 2025", readTime: "15 mins read", img: "/bn.jpg", path: "/Blog/[id]/Blog6" },
                    { id: 6, title: "Color Psychology in Interior Design", date: "August 5, 2025", readTime: "12 mins read", img: "/bn.jpg", path: "/Blog/[id]/Blog7" },
                    { id: 7, title: "Sustainable Interior Design Practices", date: "August 7, 2025", readTime: "14 mins read", img: "/bn.jpg" },
                    { id: 8, title: "Home Office Design Ideas", date: "August 9, 2025", readTime: "11 mins read", img: "/bn.jpg" },
                    { id: 9, title: "Lighting Design for Modern Homes", date: "August 11, 2025", readTime: "9 mins read", img: "/bn.jpg" },
                    { id: 10, title: "Furniture Selection Guide", date: "August 13, 2025", readTime: "13 mins read", img: "/bn.jpg" },
                    { id: 11, title: "Wall Decor Ideas and Trends", date: "August 15, 2025", readTime: "7 mins read", img: "/bn.jpg" },
                    { id: 12, title: "Flooring Options for Every Budget", date: "August 17, 2025", readTime: "16 mins read", img: "/bn.jpg" },
                ];
                setPosts(defaultPosts);
            }
            
            const savedTrending = localStorage.getItem('trendingData');
            if (savedTrending) {
                setTrendingData(JSON.parse(savedTrending));
            } else {
                // Default trending data
                setTrendingData([
                    { id: 1, title: "Designing the Heart of Your ", subtitle: "Home: Bedroom Ideas That Inspire", readTime: "18 mins read", date: "July 28, 2025" },
                    { id: 2, title: "Designing the Heart of Your ", subtitle: "Home: Bedroom Ideas That Inspire", readTime: "18 mins read", date: "July 28, 2025" },
                    { id: 3, title: "Designing the Heart of Your ", subtitle: "Home: Bedroom Ideas That Inspire", readTime: "18 mins read", date: "July 28, 2025" },
                    { id: 4, title: "Designing the Heart of Your ", subtitle: "Home: Bedroom Ideas That Inspire", readTime: "18 mins read", date: "July 28, 2025" }
                ]);
            }
        }
    }, [isAuthenticated]);

    // Save posts to localStorage whenever posts change
    useEffect(() => {
        if (isAuthenticated) {
            try {
                const dataToStore = JSON.stringify(posts);
                // Check if data is too large (approximate 4MB limit)
                if (dataToStore.length > 4 * 1024 * 1024) {
                    alert('Warning: Blog data is getting too large. Consider removing some old posts to prevent storage issues.');
                }
                localStorage.setItem('blogPosts', dataToStore);
                
                // Dispatch custom event to notify blog page of updates
                window.dispatchEvent(new CustomEvent('blogPostsUpdated'));
            } catch (error) {
                console.error('Failed to save blog posts to localStorage:', error);
                alert('Failed to save blog posts. The data might be too large. Please try removing some posts.');
            }
        }
    }, [posts, isAuthenticated]);
    
    // Save trending data to localStorage whenever it changes
    useEffect(() => {
        if (isAuthenticated) {
            try {
                localStorage.setItem('trendingData', JSON.stringify(trendingData));
            } catch (error) {
                console.error('Failed to save trending data to localStorage:', error);
                alert('Failed to save trending data. Please try again.');
            }
        }
    }, [trendingData, isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        // Simple authentication (you can change these credentials)
        if (username === 'admin' && password === 'admin123') {
            setIsAuthenticated(true);
            localStorage.setItem('blogAdminAuth', 'true');
            setLoginError("");
        } else {
            setLoginError("Invalid username or password");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('blogAdminAuth');
        setPosts([]);
        setTrendingData([]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.title || !formData.date || !formData.readTime || !formData.img || !formData.path) {
            alert("Please fill all fields");
            return;
        }

        if (editingPost) {
            // Update existing post
            setPosts(prev => prev.map(post => 
                post.id === editingPost.id 
                    ? { ...formData, id: post.id }
                    : post
            ));
            setEditingPost(null);
        } else {
            // Add new post
            const newPost: Post = {
                id: Math.floor(Math.random() * 1000000) + 1,
                ...formData
            };
            setPosts(prev => [newPost, ...prev]);
        }

        // Reset form
        setFormData({ title: "", date: "", readTime: "", img: "", path: "" });
        setShowForm(false);
    };
    
    const handleTrendingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!trendingFormData.title || !trendingFormData.subtitle || !trendingFormData.readTime || !trendingFormData.date) {
            alert("Please fill all fields");
            return;
        }

        if (editingTrending) {
            // Update existing trending item
            setTrendingData(prev => prev.map(item => 
                item.id === editingTrending.id 
                    ? { ...trendingFormData, id: item.id }
                    : item
            ));
            setEditingTrending(null);
        } else {
            // Add new trending item
            const newTrendingItem: TrendingItem = {
                id: Math.floor(Math.random() * 1000000) + 1,
                ...trendingFormData
            };
            setTrendingData(prev => [...prev, newTrendingItem]);
        }

        // Reset form
        setTrendingFormData({ title: "", subtitle: "", readTime: "", date: "" });
        setShowTrendingForm(false);
    };

    const handleEdit = (post: Post) => {
        setEditingPost(post);
        setFormData({
            title: post.title,
            date: post.date,
            readTime: post.readTime,
            img: post.img,
            path: post.path || ""
        });
        setShowForm(true);
    };
    
    const handleEditTrending = (item: TrendingItem) => {
        setEditingTrending(item);
        setTrendingFormData({
            title: item.title,
            subtitle: item.subtitle,
            readTime: item.readTime,
            date: item.date
        });
        setShowTrendingForm(true);
    };

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this post?")) {
            setPosts(prev => prev.filter(post => post.id !== id));
        }
    };
    
    const handleDeleteTrending = (id: number) => {
        if (confirm("Are you sure you want to delete this trending item?")) {
            setTrendingData(prev => prev.filter(item => item.id !== id));
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Check file size (limit to 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert('Image size must be less than 2MB. Please compress your image and try again.');
                return;
            }

            const reader = new FileReader();
            reader.onload = (ev) => {
                if (ev.target && typeof ev.target.result === "string") {
                    // Compress the image before storing
                    compressImage(ev.target.result, (compressedDataUrl) => {
                        setFormData(prev => ({ ...prev, img: compressedDataUrl }));
                    });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    // Image compression function
    const compressImage = (dataUrl: string, callback: (compressedDataUrl: string) => void) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Calculate new dimensions (max 800px width, maintain aspect ratio)
            const maxWidth = 800;
            const maxHeight = 600;
            let { width, height } = img;
            
            if (width > maxWidth) {
                height = (height * maxWidth) / width;
                width = maxWidth;
            }
            
            if (height > maxHeight) {
                width = (width * maxHeight) / height;
                height = maxHeight;
            }
            
            canvas.width = width;
            canvas.height = height;
            
            // Draw and compress
            ctx?.drawImage(img, 0, 0, width, height);
            const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7); // 70% quality
            callback(compressedDataUrl);
        };
        img.src = dataUrl;
    };

    const resetForm = () => {
        setFormData({ title: "", date: "", readTime: "", img: "", path: "" });
        setEditingPost(null);
        setShowForm(false);
    };
    
    const resetTrendingForm = () => {
        setTrendingFormData({ title: "", subtitle: "", readTime: "", date: "" });
        setEditingTrending(null);
        setShowTrendingForm(false);
    };

    // Storage management functions
    const clearAllData = () => {
        if (confirm('Are you sure you want to clear all blog data? This action cannot be undone.')) {
            try {
                localStorage.removeItem('blogPosts');
                localStorage.removeItem('trendingData');
                setPosts([]);
                setTrendingData([]);
                alert('All data cleared successfully.');
            } catch (error) {
                console.error('Failed to clear data:', error);
                alert('Failed to clear data. Please try again.');
            }
        }
    };

    const getStorageSize = () => {
        try {
            const blogData = localStorage.getItem('blogPosts') || '';
            const trendingData = localStorage.getItem('trendingData') || '';
            const totalSize = blogData.length + trendingData.length;
            return Math.round(totalSize / 1024); // Size in KB
        } catch {
            return 0;
        }
    };

    // Show login form if not authenticated
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Blog Admin Login
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Enter your credentials to access the admin panel
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder="Username"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        {loginError && (
                            <div className="text-red-600 text-sm text-center">
                                {loginError}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    
                    <div className="text-center text-sm text-gray-600">
                        <p>Default credentials:</p>
                        <p>Username: <strong>admin</strong></p>
                        <p>Password: <strong>admin123</strong></p>
                    </div>
                </div>
            </div>
        );
    }

    // Show admin panel if authenticated
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    {/* Header with Logout */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Blog Admin Panel</h1>
                            <p className="text-sm text-gray-600 mt-1">
                                Storage used: {getStorageSize()} KB
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    if (confirm('Reset to default blog posts? This will replace all current posts.')) {
                                        const defaultPosts = [
                                            { id: 1, title: "Designing the Heart of Your Home: Bedroom Ideas That Inspire", date: "July 26, 2025", readTime: "18 mins read", img: "/1.png" },
                                            { id: 2, title: "Modern Kitchen Designs You'll Love", date: "July 28, 2025", readTime: "12 mins read", img: "/2.png" },
                                            { id: 3, title: "Living Room Makeovers With a Wow Factor", date: "July 30, 2025", readTime: "10 mins read", img: "/3.png" },
                                            { id: 4, title: "Bathroom Design Trends for 2025", date: "August 1, 2025", readTime: "8 mins read", img: "/bn.jpg" },
                                            { id: 5, title: "Small Space Interior Solutions", date: "August 3, 2025", readTime: "15 mins read", img: "/bn.jpg" },
                                            { id: 6, title: "Color Psychology in Interior Design", date: "August 5, 2025", readTime: "12 mins read", img: "/bn.jpg" },
                                            { id: 7, title: "Sustainable Interior Design Practices", date: "August 7, 2025", readTime: "14 mins read", img: "/bn.jpg" },
                                            { id: 8, title: "Home Office Design Ideas", date: "August 9, 2025", readTime: "11 mins read", img: "/bn.jpg" },
                                            { id: 9, title: "Lighting Design for Modern Homes", date: "August 11, 2025", readTime: "9 mins read", img: "/bn.jpg" },
                                            { id: 10, title: "Furniture Selection Guide", date: "August 13, 2025", readTime: "13 mins read", img: "/bn.jpg" },
                                            { id: 11, title: "Wall Decor Ideas and Trends", date: "August 15, 2025", readTime: "7 mins read", img: "/bn.jpg" },
                                            { id: 12, title: "Flooring Options for Every Budget", date: "August 17, 2025", readTime: "16 mins read", img: "/bn.jpg" },
                                        ];
                                        setPosts(defaultPosts);
                                    }
                                }}
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                Reset to Default Posts
                            </button>
                            <button
                                onClick={clearAllData}
                                className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
                            >
                                Clear All Data
                            </button>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Blog Posts Section */}
                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Blog Posts</h2>
                            <button 
                                onClick={() => setShowForm(true)}
                                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                Add New Post
                            </button>
                        </div>

                        {/* Form */}
                        {showForm && (
                            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                <h3 className="text-lg font-semibold mb-4">
                                    {editingPost ? 'Edit Post' : 'Add New Post'}
                                </h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.title}
                                            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter blog post title"
                                            required
                                        />
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                value={formData.date}
                                                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Read Time
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.readTime}
                                                onChange={(e) => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="e.g., 10 mins read"
                                                required
                                            />
                                        </div>
                                        
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Path (static route)
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.path}
                                                onChange={(e) => setFormData(prev => ({ ...prev, path: e.target.value }))}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="e.g., /Blog/[id]/Blog3"
                                                required
                                            />
                                            <p className="text-xs text-gray-500 mt-1">Must be a valid static path (starts with /). Example: /Blog/[id]/Blog3</p>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required={!editingPost}
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                            Images will be automatically compressed to save storage space. Max file size: 2MB.
                                        </p>
                                        {formData.img && (
                                            <img 
                                                src={formData.img} 
                                                alt="Preview" 
                                                className="h-32 object-cover mt-2 rounded"
                                            />
                                        )}
                                    </div>
                                    
                                    <div className="flex gap-3 pt-4">
                                        <button
                                            type="submit"
                                            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                                        >
                                            {editingPost ? 'Update Post' : 'Add Post'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Posts List */}
                        <div className="space-y-4">
                            {posts.map((post) => (
                                <div key={post.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                                    <div className="flex items-center gap-4">
                                        <img 
                                            src={post.img} 
                                            alt={post.title} 
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg">{post.title}</h3>
                                            <div className="text-sm text-gray-600 mt-1">
                                                <span>{post.date}</span> • <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEdit(post)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(post.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            {posts.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    No blog posts yet. Add your first post!
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Most Trending Section */}
                    <div className="mt-12">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Most Trending Section</h2>
                            <button 
                                onClick={() => setShowTrendingForm(true)}
                                className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
                            >
                                Add Trending Item
                            </button>
                        </div>

                        {/* Trending Form */}
                        {showTrendingForm && (
                            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                <h3 className="text-lg font-semibold mb-4">
                                    {editingTrending ? 'Edit Trending Item' : 'Add New Trending Item'}
                                </h3>
                                <form onSubmit={handleTrendingSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            value={trendingFormData.title}
                                            onChange={(e) => setTrendingFormData(prev => ({ ...prev, title: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            placeholder="Enter trending item title"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Subtitle
                                        </label>
                                        <input
                                            type="text"
                                            value={trendingFormData.subtitle}
                                            onChange={(e) => setTrendingFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            placeholder="Enter trending item subtitle"
                                            required
                                        />
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                value={trendingFormData.date}
                                                onChange={(e) => setTrendingFormData(prev => ({ ...prev, date: e.target.value }))}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Read Time
                                            </label>
                                            <input
                                                type="text"
                                                value={trendingFormData.readTime}
                                                onChange={(e) => setTrendingFormData(prev => ({ ...prev, readTime: e.target.value }))}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                placeholder="e.g., 10 mins read"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-3 pt-4">
                                        <button
                                            type="submit"
                                            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                                        >
                                            {editingTrending ? 'Update Item' : 'Add Item'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={resetTrendingForm}
                                            className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Trending Items List */}
                        <div className="space-y-4">
                            {trendingData.map((item) => (
                                <div key={item.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg">{item.title}</h3>
                                            <p className="text-gray-600 mt-1">{item.subtitle}</p>
                                            <div className="text-sm text-gray-500 mt-2">
                                                <span>{item.date}</span> • <span>{item.readTime}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEditTrending(item)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteTrending(item.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            {trendingData.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    No trending items yet. Add your first trending item!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 