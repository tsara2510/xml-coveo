// Vercel serverless function to serve XML with custom headers
export default function handler(req, res) {
  // Sample XML content
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
                      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:coveo="https://www.coveo.com/en/company/about-us">
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/US-VRAA-230242 for web.pdf</loc>
                              <lastmod>2023-09-01</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/US-VRAA-230242 for web.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/VRA151597VRAYLAR_Patient_Brochure_Digital_2021.pdf</loc>
                              <lastmod>2023-07-11</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/VRA151597VRAYLAR_Patient_Brochure_Digital_2021.pdf.thumb.319.319.png</thumbnail-image>
                                  <Document-Title>VRA151597-VRAYLAR Patient Brochure (Digital) 2021</Document-Title>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/vra151597vraylar_patient_brochure_digital_2021.pdf</loc>
                              <lastmod>2022-08-25</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/vra151597vraylar_patient_brochure_digital_2021.pdf.thumb.319.319.png</thumbnail-image>
                                  <Document-Title>VRA151597-VRAYLAR Patient Brochure (Digital) 2021</Document-Title>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/schizophrenia_vraylar_schizophrenia_doctor_discussion_guide.pdf</loc>
                              <lastmod>2023-10-26</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/schizophrenia_vraylar_schizophrenia_doctor_discussion_guide.pdf.thumb.319.319.png</thumbnail-image>
                                  <Document-Title>DDG SChizo from vraylar.com-Consumer MIGRATION (v0.8)-SC</Document-Title>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/VRLR_Prescription_Drug_Facts.pdf</loc>
                              <lastmod>2022-10-06</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/VRLR_Prescription_Drug_Facts.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/You are Greater Than Bipolar I Patient Brochure Update - Digital Version.pdf</loc>
                              <lastmod>2023-04-28</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/You are Greater Than Bipolar I Patient Brochure Update - Digital Version.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/BP1_DTC_Patient_Digital_Starter_Kit_Welcome_Letter(Digital)_V2.pdf</loc>
                              <lastmod>2023-10-03</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/BP1_DTC_Patient_Digital_Starter_Kit_Welcome_Letter(Digital)_V2.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/understanding_vraylar.pdf</loc>
                              <lastmod>2025-06-13</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/understanding_vraylar.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/symptom_tracker.pdf</loc>
                              <lastmod>2024-09-26</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/symptom_tracker.pdf.thumb.319.319.png</thumbnail-image>
                                  <Document-Title>Download the Symptom Tracker for MDD</Document-Title>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/VRLR-010-DSK-Welcome-Letter-2022-R7.pdf</loc>
                              <lastmod>2023-10-10</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/VRLR-010-DSK-Welcome-Letter-2022-R7.pdf.thumb.319.319.png</thumbnail-image>
                                  <Document-Title>Welcome to your VRAYLAR® treatment journey</Document-Title>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/VRLR-010-DSK-Symptom-Tracker-2022-R8.pdf</loc>
                              <lastmod>2023-10-10</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/VRLR-010-DSK-Symptom-Tracker-2022-R8.pdf.thumb.319.319.png</thumbnail-image>
                                  <Document-Title>Download the VRAYLAR® Symptom Tracker</Document-Title>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/VRLR-010-DSK-Brochure-2022-R15.pdf</loc>
                              <lastmod>2023-10-10</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/VRLR-010-DSK-Brochure-2022-R15.pdf.thumb.319.319.png</thumbnail-image>
                                  <Document-Title>Getting Started on Your VRAYLAR® (cariprazine) Journey</Document-Title>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/patient_brochure.pdf</loc>
                              <lastmod>2025-06-13</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/patient_brochure.pdf.thumb.319.319.png</thumbnail-image>
                                  <Document-Title>VRAYLAR® Patient Brochure</Document-Title>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/my_mood_tracker.pdf</loc>
                              <lastmod>2023-10-18</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/my_mood_tracker.pdf.thumb.319.319.png</thumbnail-image>
                                  <Document-Title>My Mood Matters Tracker</Document-Title>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/mind-over-mood-swing-mobile.pdf</loc>
                              <lastmod>2024-03-21</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/mind-over-mood-swing-mobile.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/US-PSYA-240005_Vraylar_aMDD_Symptom_Tracker_Digital.pdf</loc>
                              <lastmod>2024-09-26</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/US-PSYA-240005_Vraylar_aMDD_Symptom_Tracker_Digital.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/US-VRA-230059_YouAreGreaterThanBipolarI_PatBro_Dig.pdf</loc>
                              <lastmod>2024-08-02</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/US-VRA-230059_YouAreGreaterThanBipolarI_PatBro_Dig.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/vraylar_pdf_symptom_tracker.pdf</loc>
                              <lastmod>2024-09-11</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/vraylar_pdf_symptom_tracker.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/vraylar_pdf_patient_brochure.pdf</loc>
                              <lastmod>2024-09-11</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/vraylar_pdf_patient_brochure.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/bipolar/patient_brochure.pdf</loc>
                              <lastmod>2024-09-26</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/bipolar/patient_brochure.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/US-VRAA-250137_Cons_aMDD_Patient_Brochure_Digital.pdf</loc>
                              <lastmod>2025-05-02</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/US-VRAA-250137_Cons_aMDD_Patient_Brochure_Digital.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/US-VRA-250131_Cons_BP1_Patient_Brochure_Digital.pdf</loc>
                              <lastmod>2025-05-02</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/US-VRA-250131_Cons_BP1_Patient_Brochure_Digital.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/SCZ-Pediatric-Digital-Patient-Brochure.pdf</loc>
                              <lastmod>2026-01-29</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/SCZ-Pediatric-Digital-Patient-Brochure.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                          <url>
                              <loc>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/BPI-Pediatric-Digital-Patient-Brochure.pdf</loc>
                              <lastmod>2026-01-30</lastmod>
                              <coveo:metadata>
                                  <thumbnail-image>https://vraylar.p.cwcm-admp.com/content/dam/vraylar/pdf/BPI-Pediatric-Digital-Patient-Brochure.pdf.thumb.319.319.png</thumbnail-image>
                              </coveo:metadata>
                          </url>
                      </urlset>`;

  // Set custom headers
  res.setHeader('Content-Type', 'application/xml; charset=iso-8859-1');
  res.setHeader('X-Custom-Header', 'MyCustomValue');
  res.setHeader('Access-Control-Allow-Origin', '*'); // CORS if needed
  res.setHeader('Cache-Control', 's-maxage=86400'); // Cache for 24 hours
  
  // Send XML response
  res.status(200).send(xmlContent);
}
