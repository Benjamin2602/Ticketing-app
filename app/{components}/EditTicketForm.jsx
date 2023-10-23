"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTicketForm = () => {
    const router = useRouter();
  //event handler
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // setFormData({...formData, [e.target.name]: e.target.value})
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
        // Assuming the API response contains error details as JSON
        const errorData = await res.json();
        console.error("Failed to create ticket. Error details:", errorData);
        throw new Error("Failed to create ticket");
      }
      router.refresh();
      router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware problem",
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-2 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="4"
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware problem">Hardware problem</option>
          <option value="software problem">software problem</option>
          <option value="server problem">server problem</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            id="priority"
            name="priority"
            type="radio"
            value={1}
            onChange={handleChange}
            checked={formData.priority == 1}
          />
          <label>1</label>

          <input
            id="priority"
            name="priority"
            type="radio"
            value={2}
            onChange={handleChange}
            checked={formData.priority == 2}
          />
          <label>2</label>

          <input
            id="priority"
            name="priority"
            type="radio"
            value={3}
            onChange={handleChange}
            checked={formData.priority == 3}
          />
          <label>3</label>

          <input
            id="priority"
            name="priority"
            type="radio"
            value={4}
            onChange={handleChange}
            checked={formData.priority == 4}
          />
          <label>4</label>

          <input
            id="priority"
            name="priority"
            type="radio"
            value={5}
            onChange={handleChange}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          id="progress"
          name="progress"
          type="range"
          min={0}
          max={100}
          onChange={handleChange}
          value={formData.progress}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">not started</option>
          <option value="in progress">in progress</option>
          <option value="completed">completed</option>
        </select>
        <input type="submit" className="btn " value="Create Ticket" />
      </form>
    </div>
  );
};

export default EditTicketForm;
