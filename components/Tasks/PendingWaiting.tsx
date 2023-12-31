import React from "react";

export default function PendingWaiting({ task }: any) {
  let taskContent = "";

  if (task.toLowerCase().includes("scheduling")) {
    taskContent =
      "Inspection schedule is pending, you can follow up directly to the RO assigned to the inspection.";
  }

  if (task.toLowerCase().includes("inspection recommendation")) {
    taskContent = "Inspection is being reviewed by ACD";
  }

  if (task.toLowerCase().includes("inspection approval")) {
    taskContent = "Inspection is being reviewed by OC";
  }

  if (task.toLowerCase().includes("waiting requirements")) {
    taskContent = "Waiting for the requirements from the client";
  }

  if (task.toLowerCase().includes("cancelled")) {
    taskContent = "This inspection has been cancelled.";
  }

  if (task.toLowerCase().includes("sent nim")) {
    taskContent =
      "NIM has been sent to the client. Waiting for the requirements from the client";
  }

  if (task.toLowerCase().includes("for to")) {
    taskContent = "Waiting for the travel order to be uploaded by the ACD";
  }

  if (task.toLowerCase().includes("imwpr")) {
    taskContent =
      "Nothing to do here. Accomplish post-inspection tasks after the inspection is done.";
  }

  if (
    task.toLowerCase().includes("coc") ||
    task.toLowerCase().includes("imat") ||
    task.toLowerCase().includes("vs")
  ) {
    taskContent =
      "Waiting for the ACD and RO to upload their post-inspection reports";
  }

  if (task.toLowerCase().includes("finished")) {
    taskContent = "Waiting for the ACD to upload their post-inspection reports";
  }

  return (
    <div className="h-fit lg:h-[45vh] bg-white border border-[#D5D7D8] flex flex-col rounded-[10px] p-6 gap-2">
      <h1 className="font-monts font-bold text-lg text-darkerGray underline">
        Inspection Task
      </h1>
      <div className="flex flex-col gap-5 h-full justify-center items-center">
        <h6 className="font-monts font-semibold text-sm text-darkerGray">
          {taskContent}
        </h6>
      </div>
    </div>
  );
}
