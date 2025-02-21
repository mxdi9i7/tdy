import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'TDY Warehousing <onboarding@resend.dev>',
      to: 'tdywarehousingca@gmail.com',
      subject: `新联系表单消息 - 来自 ${name}`,
      html: `
        <h2>新联系表单消息</h2>
        <p><strong>姓名：</strong> ${name}</p>
        <p><strong>邮箱：</strong> ${email}</p>
        <p><strong>电话：</strong> ${phone}</p>
        <p><strong>公司：</strong> ${company || '未提供'}</p>
        <p><strong>消息内容：</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ message: '发送消息失败' }, { status: 500 });
    }

    return NextResponse.json({ message: '消息已成功发送' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: '发送消息失败' }, { status: 500 });
  }
}
