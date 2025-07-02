"use client";

import { useUserStore } from "@/app/store/userStore";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/app/api/axios.instance";
import { deleteCookie, getCookie } from "cookies-next";

export default function SettingsModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const token = getCookie("token");

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSave = async () => {
    try {
      let imageUrl = user?.userImage;

      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        console.log(formData);
        const res = await axiosInstance.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        imageUrl = res.data.secure_url;
      }

      await axiosInstance.patch("/users/me", {
        fullName,
        image: imageUrl,
      });

      const refreshed = await axiosInstance.get("/auth/current-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(refreshed.data);

      onClose();
    } catch (err) {
      console.error("Failed to update user:", err);
    }
  };

  const handleLogout = () => {
    deleteCookie("token");

    router.push("/login");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-[90%] max-w-[400px]">
        <h2 className="text-xl font-bold mb-4 text-center">Update Profile</h2>

        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Username"
          className="w-full mb-4 p-2 text-black border border-gray-300 rounded"
        />

        <input
          type="file"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          className="mb-4 w-full"
        />

        {user?.userImage && (
          <Image
            src={user.userImage}
            alt="profile"
            width={60}
            height={60}
            className="rounded-full mb-4"
          />
        )}

        <div className="flex justify-between">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
