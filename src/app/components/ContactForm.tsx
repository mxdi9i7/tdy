'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('发送失败');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('发送失败:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-8'>
      <div className='grid gap-8 sm:grid-cols-2'>
        <div>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            姓名
          </label>
          <input
            type='text'
            id='name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className='block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white'
            required
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            邮箱
          </label>
          <input
            type='email'
            id='email'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className='block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white'
            required
          />
        </div>
        <div>
          <label
            htmlFor='phone'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            电话
          </label>
          <input
            type='tel'
            id='phone'
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className='block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white'
            required
          />
        </div>
        <div>
          <label
            htmlFor='company'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            公司名称
          </label>
          <input
            type='text'
            id='company'
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className='block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white'
          />
        </div>
      </div>
      <div>
        <label
          htmlFor='message'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          留言内容
        </label>
        <textarea
          id='message'
          rows={6}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className='block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white'
          required
        ></textarea>
      </div>

      {submitStatus && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus === 'success'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {submitStatus === 'success'
            ? '消息已发送，我们会尽快与您联系！'
            : '发送失败，请稍后重试或直接拨打电话联系我们。'}
        </div>
      )}

      <button
        type='submit'
        disabled={isSubmitting}
        className='relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
      >
        <span className='relative text-base font-semibold text-white'>
          {isSubmitting ? '发送中...' : '发送消息'}
        </span>
      </button>
    </form>
  );
}
