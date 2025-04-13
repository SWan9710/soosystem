import React from "react";
import "../styles/components/CertificateContainer.css";

const CertificateContainer = ({ certificates }) => {
  return (
    <section>
      <div className="certificate-wrap">
        {certificates.map((certificate, index) => (
          <div className="certificate-box" key={index}>
            <img src={certificate.image} alt={`등록증${index + 1}`} />
            <h3 className="certificate-detail-title">
              {certificate.detail_title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificateContainer;
