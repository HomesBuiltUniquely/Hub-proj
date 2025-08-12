"use client"

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type Post = { id: number; title: string; date: string; readTime: string; img: string };

const allPostsInit: Post[] = [
  { id: 1, title: "Designing the Heart of Your Home: Bedroom Ideas That Inspire", date: "July 26, 2025", readTime: "18 mins read", img: "/bedroom-idea.jpg" },
  { id: 2, title: "Modern Kitchen Designs You'll Love", date: "July 28, 2025", readTime: "12 mins read", img: "/kitchen.jpg" },
  { id: 3, title: "Living Room Makeovers With a Wow Factor", date: "July 30, 2025", readTime: "10 mins read", img: "/livingroom.jpg" },
  { id: 4, title: "Minimalist Home Office Ideas", date: "Aug 1, 2025", readTime: "8 mins read", img: "/office.jpg" },
  { id: 5, title: "Balcony Garden Inspiration", date: "Aug 3, 2025", readTime: "6 mins read", img: "/balcony.jpg" },
  { id: 6, title: "Kids Bedroom Themes", date: "Aug 5, 2025", readTime: "9 mins read", img: "/kidsroom.jpg" },
  { id: 7, title: "Festive Decor Trends for Indian Homes", date: "Aug 7, 2025", readTime: "7 mins read", img: "/festive.jpg" },
  { id: 8, title: "DIY Wall Art Ideas", date: "Aug 8, 2025", readTime: "11 mins read", img: "/wallart.jpg" },
  { id: 9, title: "Small Space Storage Hacks", date: "Aug 9, 2025", readTime: "5 mins read", img: "/storage.jpg" },
];

const itemsPerPage = 3;

const categoryCards = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: "Interiors",
  img: "bn.jpg",
}));

const HomeShowcase = ({ canEdit = false }: { canEdit?: boolean }) => {
  const [allPosts, setAllPosts] = useState<Post[]>(allPostsInit);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(allPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = allPosts.slice(startIndex, startIndex + itemsPerPage);
  const [editStates, setEditStates] = useState<boolean[]>(Array(allPosts.length).fill(false));
  const [editTitles, setEditTitles] = useState<string[]>(allPosts.map(p => p.title));
  const [editImgs, setEditImgs] = useState<string[]>(Array(allPosts.length).fill(""));
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newImg, setNewImg] = useState<string>("");
  const [newDate, setNewDate] = useState<string>("");
  const [newReadTime, setNewReadTime] = useState<string>("");

  // Sync edit states with posts
  React.useEffect(() => {
    setEditStates(Array(allPosts.length).fill(false));
    setEditTitles(allPosts.map(post => post.title));
    setEditImgs(Array(allPosts.length).fill(""));
  }, [allPosts.length]);

  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleEdit = (globalIdx: number) => {
    setEditStates(states => states.map((v, i) => i === globalIdx ? true : v));
  };
  const handleCancel = (globalIdx: number) => {
    setEditStates(states => states.map((v, i) => i === globalIdx ? false : v));
    setEditTitles(titles => titles.map((t, i) => i === globalIdx ? allPosts[globalIdx].title : t));
    setEditImgs(imgs => imgs.map((img, i) => i === globalIdx ? "" : img));
  };
  const handleSave = (globalIdx: number) => {
    setAllPosts(prev => {
      const updated = [...prev];
      updated[globalIdx] = {
        ...updated[globalIdx],
        title: editTitles[globalIdx],
        img: editImgs[globalIdx] || updated[globalIdx].img,
      };
      return updated;
    });
    setEditStates(states => states.map((v, i) => i === globalIdx ? false : v));
    setEditImgs(imgs => imgs.map((img, i) => i === globalIdx ? "" : img));
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, globalIdx: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target && typeof ev.target.result === "string") {
          setEditImgs(imgs => imgs.map((img, i) => i === globalIdx ? ev.target!.result as string : img));
        }
      };
      reader.readAsDataURL(file);
    }
  };
  // Add new blog post (at the top)
  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newImg || !newDate || !newReadTime) return;
    setAllPosts(prev => [
      { id: prev.length + 1, title: newTitle, date: newDate, readTime: newReadTime, img: newImg },
      ...prev,
    ]);
    setNewTitle("");
    setNewImg("");
    setNewDate("");
    setNewReadTime("");
    setShowAddForm(false);
    setCurrentPage(1); // Show the new post on first page
  };
  const handleNewImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target && typeof ev.target.result === "string") setNewImg(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="w-full py-8 px-3 md:px-12 bg-[#f1f2f6]">
      {canEdit && (
        <div className="mb-8 flex justify-center">
          <button onClick={() => setShowAddForm(f => !f)} className="bg-green-600 text-white px-4 py-2 rounded mr-2">{showAddForm ? "Cancel" : "Add New Blog"}</button>
        </div>
      )}
      {canEdit && showAddForm && (
        <form onSubmit={handleAddBlog} className="mb-8 flex flex-col items-center gap-3 bg-white p-6 rounded shadow-md max-w-md mx-auto">
          <input type="text" placeholder="Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} className="border p-2 rounded w-full" required />
          <input type="date" placeholder="Date" value={newDate} onChange={e => setNewDate(e.target.value)} className="border p-2 rounded w-full" required />
          <input type="text" placeholder="Read Time (e.g. 10 mins read)" value={newReadTime} onChange={e => setNewReadTime(e.target.value)} className="border p-2 rounded w-full" required />
          <input type="file" accept="image/*" onChange={handleNewImg} className="border p-2 rounded w-full" required />
          {newImg && <img src={newImg} alt="Preview" className="h-32 object-cover mt-2" />}
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Blog</button>
        </form>
      )}
      <div className="flex flex-wrap gap-6 justify-center mb-8">
        {currentPosts.map((post, idx) => {
          const globalIdx = startIndex + idx;
          return (
            <div key={post.id} className="w-80 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative">
                <img src={editImgs[globalIdx] || post.img} alt={post.title} className="h-44 w-full object-cover" />
                {canEdit && editStates[globalIdx] && (
                  <>
                    <input id={`file-${globalIdx}`} type="file" accept="image/*" onChange={e => handleImageChange(e, globalIdx)} className="hidden" />
                    <label htmlFor={`file-${globalIdx}`} className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded shadow cursor-pointer">Upload Image</span>
                    </label>
                  </>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between text-gray-400 text-xs mb-2">
                  <span>Blog • {post.readTime}</span>
                  <span>{post.date}</span>
                </div>
                {canEdit && editStates[globalIdx] ? (
                  <input type="text" value={editTitles[globalIdx]} onChange={e => setEditTitles((titles: string[]) => titles.map((t, i) => i === globalIdx ? e.target.value : t))} className="font-semibold text-lg mb-1 border p-1 w-full" />
                ) : (
                  <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
                )}
                {canEdit && (
                  editStates[globalIdx] ? (
                    <>
                      <button onClick={() => handleSave(globalIdx)} className="bg-green-500 text-white px-3 py-1 rounded mr-2 mt-2">Save</button>
                      <button onClick={() => handleCancel(globalIdx)} className="bg-gray-400 text-white px-3 py-1 rounded mt-2">Cancel</button>
                    </>
                  ) : (
                    <button onClick={() => handleEdit(globalIdx)} className="bg-blue-500 text-white px-3 py-1 rounded mt-2">Edit</button>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mb-10">
        <button onClick={goToPrev} disabled={currentPage === 1} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50">&lt;</button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-8 h-8 rounded-full font-medium focus:outline-none ${currentPage === i + 1 ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>{i + 1}</button>
        ))}
        <button onClick={goToNext} disabled={currentPage === totalPages} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50">&gt;</button>
      </div>
      <h2 className="text-4xl font-semibold mb-6 mt-20 text-gray-900">Explore by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14 mt-20">
        {categoryCards.map((cat) => (
          <div key={cat.id} className="relative h-48 rounded-xl overflow-hidden group cursor-pointer shadow-md">
            <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            <div className="absolute inset-0 bg-black/40 bg-opacity-45 group-hover:bg-opacity-60 flex flex-col justify-center items-center transition duration-300">
              <FaArrowRight className="text-white text-xl mb-1 opacity-90" />
              <span className="text-white text-lg font-semibold">{cat.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center py-14">
        <p className="mb-2 text-gray-500 text-md">New E-Book</p>
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Home Buyer’s <span className="text-red-600">Handbook</span></h2>
        <button className="mt-3 bg-red-600 hover:bg-red-700 text-white px-12 py-3 rounded-full font-bold text-lg shadow-lg transition">Buy now for free</button>
      </div>
    </section>
  );
};

export default HomeShowcase;
