import { Suspense } from "react";
import BookConsultationForm from "../Components/BookConsultation/BookConsultationForm";

export default function BookConsultationPage() {
  return (
    <div>
      <Suspense fallback={<div />}>
        <BookConsultationForm />
      </Suspense>
    </div>
  );
}
