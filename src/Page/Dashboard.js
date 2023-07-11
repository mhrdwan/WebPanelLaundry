import React from 'react'
import { Space, Table, Tag } from 'antd';
import PageWrapper from '../Component/PageWrapper';
function Dashboard() {
  const columns = [
    {
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Paket',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Alamat',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      sorter: {
        compare: (a, b) => a.tags.join('').localeCompare(b.tags.join('')),
        multiple: 1,
      },
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length < 5 ? 'geekblue' : 'green';
            if (tag === 'Belum Bayar') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Harga',
      key: 'harga',
      dataIndex:"harga"
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: "Paket Laundry Biasa (Per Hari) 1KG",
      address: 'New York No. 1 Lake Park',
      tags: ['Sudah Bayar'],
      harga: "Rp.10.000"
    },
    {
      key: '2',
      name: 'Jim Green',
      age: "Paket Laundry Cuci Setrika (Per Hari) 1KG",
      address: 'London No. 1 Lake Park',
      tags: ['Belum Bayar'],
      harga: "Rp.10.000"
    },
    {
      key: '3',
      name: 'Joe Black',
      age: "Paket Dry Cleaning (Per Hari) 1KG",
      address: 'Sydney No. 1 Lake Park',
      tags: ['Sudah Bayar'],
      harga: "Rp.10.000"
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div>
      <PageWrapper>
        <Table columns={columns} dataSource={data}
        onChange={onChange}
        />
      </PageWrapper>

    </div>
  )
}


export default Dashboard