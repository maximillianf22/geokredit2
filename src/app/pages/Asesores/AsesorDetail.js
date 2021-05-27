import React, { useState } from "react";
import { ProfileCard } from "../components/ProfileCard";


export default function AsesorDetail() {

  return (
    <div className="row">
      <div className="row">
        <div className="col-lg-4">
        <ProfileCard></ProfileCard>
        </div>
        <div className="col-lg-8 bg-white" style="height: 450px; overflow-y: auto;">

        </div>
      </div>
    </div>
  );
}
