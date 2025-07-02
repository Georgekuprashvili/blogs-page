"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { axiosInstance } from "@/app/api/axios.instance";
import { getCookie } from "cookies-next";

export default function EditBlog() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    axiosInstance.get(`/blogs/${blogId}`).then((res) => {
      setTitle(res.data.title);
      setSummary(res.data.summary);
    });
  }, [blogId]);

  const handleUpdate = async () => {
    try {
      await axiosInstance.patch(`/blogs/${blogId}`, { title, summary });
      router.push("/blog");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-background p-6 rounded shadow-md w-full max-w-lg mx-auto text-foreground space-y-5 mt-10">
      <h1 className="text-3xl font-bold">Edit Blog</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full px-3 py-2 border rounded bg-background text-foreground"
      />

      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Summary"
        className="w-full px-3 py-2 border rounded bg-background text-foreground"
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
}
