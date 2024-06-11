"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import { IProperty } from "@/types";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import PropertyInfo from "@/components/PropertyInfo";

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState<IProperty | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const property = await fetchProperty(id as string);
        setProperty(property);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0] as string} />
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="fas mr-2" /> Back to Properties
              </Link>
            </div>
          </section>
          <PropertyInfo />
        </>
      )}
    </>
  );
};
export default PropertyPage;
