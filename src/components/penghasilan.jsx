import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const ZakatPenghasilanForm = () => {
  const [pendapatan, setPendapatan] = useState("");
  const [pendapatanPerTahun, setPendapatanPerTahun] = useState("");
  const [pengeluaran, setPengeluaran] = useState("");
  const [pengeluaranPerTahun, setPengeluaranPerTahun] = useState("");
  const [penghasilanTambahan, setPenghasilanTambahan] = useState("");
  const [penghasilanTambahanPerTahun, setPenghasilanTambahanPerTahun] =
    useState("");
  const [pembayaranLain, setPembayaranLain] = useState("");
  const [pembayaranLainPerTahun, setPembayaranLainPerTahun] = useState("");
  const [hargaEmas, setHargaEmas] = useState("");
  const [hargaEmasDiSetahunkan, setHargaEmasDiSetahunkan] = useState("");
  const [zakatAmount, setZakatAmount] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [totalPenghasilanBersih, setTotalPenghasilanBersih] = useState("");
  const [totalPenghasilan, setTotalPenghasilan] = useState("");
  const [totalPengeluaran, setTotalPengeluaran] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform zakat calculation logic here
    const pendapatanPerTahun = pendapatan * 12;
    const pengeluaranPerTahun = pengeluaran * 12;
    const penghasilanTambahanPerTahun = penghasilanTambahan * 12;
    const pembayaranLainPerTahun = pembayaranLain * 12;
    const hargaEmasDiSetahunkan = hargaEmas * 85;

    if (pendapatan.includes(".")) {
      alert("Isi angka tanpa titik dan koma (. & ,)");
      return; // Exit the function early if the input is invalid
    }

    const totalPenghasilan = pendapatanPerTahun + penghasilanTambahanPerTahun;
    const totalPengeluaran = pengeluaranPerTahun + pembayaranLainPerTahun;
    const totalPenghasilanBersih = totalPenghasilan - totalPengeluaran;

    const zakatAmount = totalPenghasilanBersih * 0.025;
    setZakatAmount(zakatAmount.toLocaleString("id-ID"));
    setPendapatanPerTahun(pendapatanPerTahun.toLocaleString("id-ID"));
    setPengeluaranPerTahun(pengeluaranPerTahun.toLocaleString("id-ID"));
    setPenghasilanTambahanPerTahun(
      penghasilanTambahanPerTahun.toLocaleString("id-ID")
    );
    setPembayaranLainPerTahun(pembayaranLainPerTahun.toLocaleString("id-ID"));
    setHargaEmasDiSetahunkan(hargaEmasDiSetahunkan.toLocaleString("id-ID"));
    setTotalPenghasilanBersih(totalPenghasilanBersih.toLocaleString("id-ID"));
    setTotalPenghasilan(totalPenghasilan.toLocaleString("id-ID"));
    setTotalPengeluaran(totalPengeluaran.toLocaleString("id-ID"));
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClear = () => {
    setPendapatan("");
    setPengeluaran("");
    setPenghasilanTambahan("");
    setPembayaranLain("");
    setHargaEmas("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Penghasilan per bulan (Bruto)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Rp. xxx.xxx"
            value={pendapatan}
            onChange={(e) => setPendapatan(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pengeluaran kebutuhan pokok per bulan</Form.Label>
          <Form.Control
            type="text"
            placeholder="Rp. xxx.xxx"
            value={pengeluaran}
            onChange={(e) => setPengeluaran(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Penghasilan tambahan (opsional)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Rp. xxx.xxx"
            value={penghasilanTambahan}
            onChange={(e) => setPenghasilanTambahan(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Penghasilan lainya (opsional)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Rp. xxx.xxx"
            value={pembayaranLain}
            onChange={(e) => setPembayaranLain(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Harga Emas per gram</Form.Label>
          <Form.Control
            type="text"
            placeholder="Rp. xxx.xxx"
            value={hargaEmas}
            onChange={(e) => setHargaEmas(e.target.value)}
          />
        </Form.Group>
        <div className="pb-5">
          <Button className="button-73" type="submit">
            Hitung Zakat
          </Button>
          <Button
            variant="danger"
            type="button"
            className="ms-2"
            onClick={handleClear}
          >
            Clear
          </Button>

        </div>
        <div className="result p-5 fw-bold note">
        <p>Note :</p>
        <p>Please Input the Number without (. & ,) [Number Only]</p>
        </div>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Zakat Calculation Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border mb-3 p-3 result">
            <p className="title">Rincian penghasilan pertahun</p>
            <p>
              Penghasilan Rp{pendapatan} x 12 bln = {pendapatanPerTahun}
            </p>
            <p>
              Penghasilan Tambahan Rp{penghasilanTambahan} x 12 bln ={" "}
              {penghasilanTambahanPerTahun}
            </p>
            <p>Total penghasilan = Rp{totalPenghasilan}</p>
          </div>
          <div className="border mb-3 p-3 result">
            <p className="title">Rincian pengeluaran pertahun</p>
            <p>
              Pengeluaran Rp{pengeluaran} x 12 bln = {pengeluaranPerTahun}
            </p>
            <p>
              Pembayaran Lain Rp{pembayaranLain} x 12 bln ={" "}
              {pembayaranLainPerTahun}
            </p>
            <p>Total pengeluaran = Rp{totalPengeluaran}</p>
          </div>

          <div className="border mb-3 p-3 result">
            <p className="title">Nisab dan Penghasilan bersih di setahunkan</p>
            <p>
              Harga emas Rp{hargaEmas} x 85 gram = {hargaEmasDiSetahunkan}
            </p>
            <p>
              Total pengasilan bersih disetahunkan Rp{totalPenghasilanBersih}
            </p>
          </div>
          <div className="border mb-3 p-3 result">
            <p className="title">Zakat yang harus dibayarkan</p>
            <p>
              <br />
              Rp{totalPenghasilanBersih} x 2.5% = {zakatAmount}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ZakatPenghasilanForm;
