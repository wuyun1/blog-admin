import React, { PureComponent } from 'react';
import { Modal, Form, Input } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import { FormComponentProps } from 'antd/lib/form/Form';

class LinkModel extends PureComponent<ModalProps & FormComponentProps> {
  handleOk = () => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('haha');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal title="添加链接" {...this.props} onOk={this.handleOk}>
        <Form layout="horizontal">
          <Form.Item label="姓名">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'name is required' }]
            })(<Input placeholder="name" />)}
          </Form.Item>
          <Form.Item label="url">
            {getFieldDecorator('url', {
              rules: [{ required: true, message: 'url is required' }]
            })(<Input placeholder="url" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export const Model = Form.create()(LinkModel);