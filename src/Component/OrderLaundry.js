import React, { useState } from 'react'
import PageWrapper from './PageWrapper'
import { Col, Row } from 'react-bootstrap'
import { Button, Input, Form, Select, DatePicker, Alert } from 'antd'

function OrderLaundry() {
    const [form] = Form.useForm();
    const [totalHarga, setTotalHarga] = useState(0);
    const onFinish = (values) => {
        console.log('Success:', values);
        <Alert message="Order Dibuat" type="success" showIcon />
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        <Alert message="Error Pembuatan Order" type="error" showIcon />
    };

    const handleOrder = () => {
        form
            .validateFields()
            .then(values => {
                console.log('Received values of form: ', values);
                TotalHarga()
            })
            .catch(info => {
                console.log('Failed:', info);
                TotalHarga()
            });
    };

    const TotalHarga = () => {
        const hari = form.getFieldValue("hari");
        const nilai = form.getFieldValue("nilai");
        const berat = parseInt(form.getFieldValue("berat"));

        parseInt(setTotalHarga(hari * nilai * berat));
    }

    //function untuk mengubah nama depan saay spasi besar
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }


    return (
        <div>
            <PageWrapper>
                <Row>
                    <Col sm={8}>
                        <h4>Halaman Order</h4>
                    </Col>
                    <Col sm={4} className="d-flex justify-content-end">
                        <Button onClick={handleOrder} type='primary'>Buat Pesanan</Button>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Form
                        layout='vertical'
                        form={form}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 24 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Row>
                            <Col sm={6}>
                                <Form.Item
                                    label="Nama Pelanggan"
                                    name="nama"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Masukkan Nama Pelanggan!',
                                        },
                                    ]}
                                >
                                    <Input
                                        type='text'
                                        placeholder='Masukkan Nama Pelanggan'
                                        onChange={(event) => {
                                            const { value } = event.target;
                                            form.setFieldsValue({ nama: toTitleCase(value) });
                                        }}
                                    />
                                </Form.Item>


                                <Form.Item
                                    label="Nomor Telepon"
                                    name="notelp"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Masukkan No Telpon!',
                                        },
                                    ]}
                                >
                                    <Input type='number' placeholder='Masukkan No Telp' />
                                </Form.Item>
                                <Form.Item
                                    label="Alamat Lengkap"
                                    name="alamat"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Masukkan Alamat Lengkap!',
                                        },
                                    ]}
                                >
                                    <Input type='text'
                                        style={{ height: "100px" }}
                                        placeholder='Masukkan Alamat' />
                                </Form.Item>
                                <Form.Item
                                    label="Keterangan"
                                    name="keterangan"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Masukkan Keterangan!',
                                        },
                                    ]}
                                >
                                    <Input
                                        style={{ width: "100%", height: "100px" }}
                                        placeholder="Masukkan Keterangan"
                                    />
                                </Form.Item>
                            </Col>
                            <Col sm={6}>
                                <Form.Item
                                    label="Pilih Paket"
                                    name="paket"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Masukkan Jenis Paket!',
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        optionFilterProp='children'
                                        placeholder="Pilih Paket"
                                        onChange={(value, option) => {
                                            console.log('ini adalaah', option);
                                            form.setFieldsValue({ paket: value });
                                            form.setFieldsValue({ nilai: option.nilai });
                                        }}
                                    >
                                        <Select.Option nilai={6000} value="1">Self Service Cuci Kering Lipat (minimal 5 kg) Rp6.000</Select.Option>
                                        <Select.Option nilai={7000} value="2">Cuci Kering Lipat (minimal 5 kg) Rp7.000</Select.Option>
                                        <Select.Option nilai={8000} value="3">Setrika (minimal 5 kg) Rp8.000</Select.Option>
                                        <Select.Option nilai={8000} value="4">Cuci Kering Lipat (minimal 3 kg) Rp8.000</Select.Option>
                                        <Select.Option nilai={10000} value="5">Cuci Kering Setrika (minimal 5 kg) Rp10.000</Select.Option>
                                    </Select>

                                </Form.Item>
                                <Form.Item
                                    label="Pilih Hari"
                                    name="hari"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Masukkan Berat!',
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        optionFilterProp='children'
                                        placeholder="Pilih Hari"
                                    >
                                        <Select.Option value={1}>1 Hari</Select.Option>
                                        <Select.Option value={2}>2 Hari</Select.Option>
                                        <Select.Option value={3}>3 Hari</Select.Option>

                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Berat (Kg)"
                                    name="berat"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Masukkan Berat!',
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="Masukkan Berat"
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Tanggal Order Masuk"
                                    name="tanggalmasuk"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Masukkan Tanggal Order Masuk!',
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        style={{ width: "100%" }}
                                        placeholder="Masukkan Tanggal Order Masuk"
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Tanggal Order Keluar"
                                    name="tanggalkeluar"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Masukkan Tanggal Order Keluar',
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        style={{ width: "100%" }}
                                        placeholder="Masukkan Tanggal Order Keluar"
                                    />
                                </Form.Item>
                                <Form.Item
                                    style={{ marginTop: 100 }}
                                    name="total"

                                >
                                    <p>Harga Total Pembayaran Adalah <span><b>Rp.{new Intl.NumberFormat('id-ID').format(totalHarga)}</b></span></p>

                                </Form.Item>

                            </Col>
                        </Row>

                    </Form>
                </Row>
            </PageWrapper>
        </div>
    )
}

export default OrderLaundry
