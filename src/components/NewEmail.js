import { CaretDownOutlined, FontColorsOutlined, EllipsisOutlined, PaperClipOutlined, MoreOutlined, DeleteFilled, PictureFilled, SmileOutlined, ExportOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import React from 'react'

function NewEmail() {
  return (
    <>
      <article className="new-email">
        <div className="email-composer-header">
          <Space direction="vertical" size="large" align="start">
            <div className="input-container">
              <CaretDownOutlined />
              <input type="text" placeholder="To" className="email-input" />
              <ExportOutlined className="export-icon" />
            </div>
          </Space>
        </div>
        <div className="email-composer">
          <textarea
            placeholder="Write your email here ..."
            className="email-textarea"
          />
        </div>
        <div className="email-composer-footer">
          <Space direction="vertical">
            <EllipsisOutlined />
            <div className="footer-icons">
              <Space>
                <Button type="primary">
                  Send <CaretDownOutlined />
                </Button>
                <FontColorsOutlined />
                <PaperClipOutlined />
                <SmileOutlined />
                <PictureFilled />
              </Space>
              <MoreOutlined className="more-icon" />
              <DeleteFilled className="delete-icon" />
            </div>
          </Space>
        </div>
      </article>
    </>
  );
}

export default NewEmail;