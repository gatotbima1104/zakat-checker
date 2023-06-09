import React from "react";
import { useState } from "react";
import { Container, Row, Form, Modal, Button } from "react-bootstrap";
import Menu from "./components/menu";
import zakat from "./assets/zakat.jpg";
import zakat3 from "./assets/zakat3.jpg";
import ZakatPenghasilanForm from "./components/penghasilan";

const App = () => {
  const [jumlahJiwa, setJumlahJiwa] = useState("");
  const [hargaBeras, setHargaBeras] = useState("");
  const [hasilBeras, setHasilBeras] = useState(0);
  const [hasilUang, setHasilUang] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [submittedCalculation, setSubmittedCalculation] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // calculate zakat
    const hasilUang = jumlahJiwa * hargaBeras * 2.5;
    const hasilBeras = jumlahJiwa * 2.5;
    setHasilBeras(hasilBeras + " kg");
    // setHasilUang('Rp ' + hasilUang + '.000');
    if (jumlahJiwa % 2 === 0) {
      setHasilUang("Rp " + hasilUang.toLocaleString("id-ID") + ",000");
    } else {
      setHasilUang("Rp " + hasilUang.toLocaleString("id-ID") + "00");
    }
  };

  const handleClear = () => {
    setJumlahJiwa("");
    setHargaBeras("");
    setHasilBeras("");
    setHasilUang("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Menu />

      <Container className="mt-5">
        <Row className="my-5">
          <div className="col-md-4 mb-5">
            <img src={zakat} alt="" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-8 desc">
            <h1 className="fs-5 mt-5">
              Check zakatmu sebelum ajalmu
            </h1>
            <p className="fs-5 mt-3">
            Periksa dengan seksama pendapatan dan pengeluaranmu. Pastikan tidak ada kesalahan atau kelalaian dalam membayar zakat. Jika ada, segeralah meluruskan dan menghitung kembali. Ingatlah bahwa zakat adalah salah satu cara kita berkontribusi dalam membantu sesama dan memperbaiki keadaan umat muslim.
            </p>
          </div>
        </Row>

        <Row className="my-5">
          <div className="col-md-8 desc">
            <h1 className="fs-5 mt-5">
              Check zakatmu sebelum tuhan yang mengeceknya
            </h1>
            <p className="fs-5 mt-3 mb-5">
            Begitu juga dengan zakat fitrah, pastikan kita menghitung jumlah jiwa dalam keluarga dengan benar. Hitung dengan seksama dan pastikan zakat fitrah telah dibayarkan sebelum waktu yang ditentukan.
            </p>
          </div>
          <div className="col-md-4">
            <img src={zakat3} alt="" className="img-fluid " />
          </div>
        </Row>
      </Container>

      <div className="text-form align-items-center justify-content-center">
        <Container className="my-5 result">
          <h1 className="fs-5 my-5 pt-5 text-center ">
            HITUNG ZAKAT FITRAHMU
          </h1>

          <Form className="mb-5" onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Jumlah Jiwa</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan jumlah jiwa"
                value={jumlahJiwa}
                onChange={(e) => setJumlahJiwa(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Harga Beras per kg</Form.Label>
              <Form.Control
                type="number"
                placeholder="Rp. xx.xxx"
                value={hargaBeras}
                onChange={(e) => setHargaBeras(e.target.value)}
              />
            </Form.Group>

            <div className="btn d-flex gap-3 mb-5 pb-5">
              {/* <Button variant="primary" type="submit" className="button-73">
                Hitung Zakat
              </Button> */}

              <Button
                
                onClick={() => {
                  setSubmittedCalculation(
                    `Jumlah Jiwa: ${jumlahJiwa}\nHarga Beras per kg: ${hargaBeras}\nPerhitungan Uang: ${jumlahJiwa} x ${hargaBeras} x 2.5 = ${hasilUang}\nPerhitungan Beras: ${jumlahJiwa} x 2.5 = ${hasilBeras}
                    \nZakat yang harus dibayarkan dengan Uang / Beras:\n${hasilUang} / ${hasilBeras}
                    `
                  );
                  setShowModal(true);
                }}
                className="button-73"
              >
                Hitung Zakat
              </Button>

              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Submitted Calculation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <pre>{submittedCalculation}</pre>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              <Button variant="danger" type="button" onClick={handleClear}>
                Clear
              </Button>
            </div>
{/* 
            <div className="result py-5 px-3">
              <h3 className="fs-5">Hasil hitung zakat fitrahmu</h3>
              <p>
                Zakat yang harus dibayarkan dengan uang {hasilUang} / beras
                sebesar {hasilBeras}
              </p>
              <h1 className="fs-4">{hasilUang}</h1>
              <h1 className="fs-4">{hasilBeras}</h1>
            </div> */}
          </Form>

        </Container>
        <Container className="result my-5 p-3">
          <h1 className="fs-5 my-5 text-center">
            HITUNG ZAKAT PENGHASILANMU
          </h1>

          <ZakatPenghasilanForm />
        </Container>

      </div>
    </div>
  );
};

export default App;
