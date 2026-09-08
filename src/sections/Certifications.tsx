import SectionTitle from "../components/SectionTitle";
import CertificationCard from "../components/CertificationCard";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Certifications"
          title="Continuous learning, backed by recognized credentials."
          description="A selection of certifications and learning achievements that complement my academic background and technical projects."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <CertificationCard
              key={`${certification.issuer}-${certification.title}`}
              title={certification.title}
              issuer={certification.issuer}
              date={certification.date}
              description={certification.description}
              credentialUrl={certification.credentialUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}