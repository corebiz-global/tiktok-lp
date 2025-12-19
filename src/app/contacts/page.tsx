"use client";
import { Contacts } from "@/components/shared/contacts";
import { HeaderSection } from "@/components/shared/header-section";
import { useTranslation } from "react-i18next";

export default function ContactsPage() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderSection title={t("contacts.title")} description={t("contacts.description")} />
      <Contacts />
    </>
  );
}
