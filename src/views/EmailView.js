import { CaretDownOutlined, FontColorsOutlined, EllipsisOutlined, PaperClipOutlined, MoreOutlined, DeleteFilled, PictureFilled, SmileOutlined, ExportOutlined } from '@ant-design/icons'
import flaticonWelcomeImage from '../assets/images/flaticon-welcome-image.png'
import rubbishButton from '../assets/icons/rubbish-bin-delete-button.png'
import downloadButton from '../assets/icons/download-button.png'
import rateStarButton from '../assets/icons/rate-star-button.png'
import backArrow from '../assets/icons/back-arrow.png'
import { Button, Space } from 'antd'
import React from 'react'

function EmailView() {
  return (
    <>
      <main className="email-view">
        <nav className="email-toolbar">
          <ul>
            <li>
              <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
              <img className="icon" src={downloadButton} alt="archive button" />
            </li>
            <li>
              <img className="icon" src={rubbishButton} alt="delete button" />
            </li>
          </ul>
          <div className="space"></div>
          <div>
            <p>1 of 25</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
              <div className="sender-info">
                <h2>Freepik Company</h2>
                <em>&lt;no-reply@freepik.com&gt;</em>
              </div>
              <div className="user-info">
                <p>
                  to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
                </p>
              </div>
            </div>
            <div className="date-info">
              <p>17 March 2021, 09:33</p>
            </div>
            <div className="email-action-icons">
              <ul>
                <li>
                  <img className="icon" src={backArrow} alt="reply button" />
                </li>
                <li>
                  <img
                    className="icon"
                    src={rateStarButton}
                    alt="star button"
                  />
                </li>
                <li>
                  <img
                    className="icon"
                    src={rubbishButton}
                    alt="delete button"
                  />
                </li>
              </ul>
            </div>
          </header>
          <section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
          <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
          </section>
        </article>
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
      </main>
    </>
  );
}

export default EmailView;