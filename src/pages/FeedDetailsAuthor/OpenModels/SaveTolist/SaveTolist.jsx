import { Button, CheckBox, Modal } from "@/components";
import React from "react";
import "./SaveTolist.scss";
const SaveTolist = ({ onHide }) => {
  return (
    <Modal onHide={onHide} size="md">
      <div id="SaveTolist">
        <div>
          <p className="text-18-500">Save To List</p>
        </div>
        <div className="d-flex justify-content-between mt-32 mb-24">
          <div>
            <p className="text-16-500 color-3333">Your list</p>
          </div>
          <div>
            <p className="text-14-400 color-113D">+ Add List</p>
          </div>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div>
            <CheckBox className="s-22" />
          </div>
          <div>
            <p className="text-14-400 color-3333">My New Bookmarks</p>
          </div>
        </div>

        <div className="d-flex gap-2 mt-19 align-items-center">
          <div>
            <CheckBox className="s-22" />
          </div>
          <div>
            <p className="text-14-400 color-3333">My New Bookmarks</p>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-32">
          <Button btnText="Add" className="w-128 h-49" />
        </div>
      </div>
    </Modal>
  );
};

export default SaveTolist;
