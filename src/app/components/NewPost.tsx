"use client";
import { AuthUser } from "@/model/user";
import PoustUserAvatar from "./PoustUserAvatar";
import FilesIcon from "./ui/icons/FilesIcon";
import Button from "./ui/Button";
import { ChangeEvent, useState } from "react";

type Props = {
  user: AuthUser;
};
export default function NewPost({ user: { username, image } }: Props) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDragging(false);
    const files = e.target?.files;
    if (!!files && files[0]) {
      setFile(files[0]);
      console.debug(files[0]);
    }
  };
  const handleDrag = (e: React.DragEvent) => {
    if (e.type === "dragenter") {
      setDragging(true);
    } else if (e.type === "dragleave") {
      setDragging(false);
    }
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer?.files;
    if (!!files && files[0]) {
      setFile(files[0]);
      console.debug(files[0]);
    }
  };
  return (
    <section>
      <PoustUserAvatar username={username} image={image ?? ""} />
      <form>
        <input
          className="hidden"
          name="input"
          id="input-upload"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <label
          htmlFor="input-upload"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <FilesIcon />
          <p>이미지파일을 드래그 & 드랍 하시거나 클릭하세요.</p>
        </label>
        <textarea
          name="text"
          id="input-text"
          required
          rows={10}
          placeholder="Write a caption"
        />
        <Button text="Publish" onClick={() => {}} />
      </form>
    </section>
  );
}
