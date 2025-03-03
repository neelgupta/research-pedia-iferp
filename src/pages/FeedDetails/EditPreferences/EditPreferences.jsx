import UserNavbar from "@/pages/Layout/UserLayout/UserNavbar";
import React from "react";
import EditPreferencesTable from "./EditPreferencesTable/EditPreferencesTable";
import EditPreferencesSearch from "./EditPreferencesSearch";

const EditPreferences = () => {
  return (
    <div id="EditPreferences">
      <UserNavbar />

      <div>
        <div className="row">
          <div className="col-9 border">
            <EditPreferencesTable />
          </div>
          <div className="col-3">
            <EditPreferencesSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPreferences;
