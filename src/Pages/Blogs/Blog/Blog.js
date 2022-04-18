import React from 'react';
import { Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Table striped bordered hover size="sm" className='mt-4'>
                <tbody>
                    <tr>
                        <td>
                            <h4>1. Difference between "authorization" and "authentication"</h4>
                        </td>
                    </tr>
                    <tr>
                        <td className='d-flex'>
                            <div className='w-50 p-2'>
                                <h4>Authorization</h4>
                                <p>Authorization হলো এমন একটি নিরাপত্তা ব্যবস্থা যা একজন ইউজার এর রোল নির্ধারন করে দেয় এবং সে কি কি ফাইল, ডাটা, ফিচার, সার্ভিস ব্যাবহার করতে পারবে সেটি নির্ধারন করে দেয়।</p>
                            </div>
                            <div className='w-50 p-2'>
                                <h4>Authentication</h4>
                                <p>Authentication সিস্টেম মুলত একটি সিকিউরিটি সিস্টেম যা ব্যাবহার কারিদের পরিচয় যাচাই করে থাকে, অর্থাৎ ওয়েবসাইটে ব্যাবহারকারীর পরিচয় যাচায় করে তবেই তার পার্সোনাল একাউন্টে প্রবেশ বা এক্সেস করতে দিবে।</p>

                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <h4>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='p-2'>
                                <p>Firebase দিয়ে Authorization, Authentication, Hosting, Realtime Database, Storage, Analytics ইত্যাদি ফিচার দিয়ে থাকে যা একজন ডেভেলপারের সময় বাচায় এবং দ্রুত কাজ সম্পূর্ন করতে সাহয্য করে থাকে, যে কারনে Firebase ব্যবহার করা উচিৎ। Firebase একটি পূর্ণাঙ্গ prototyping tool যা অত্যান্ত ইউজার ফ্রেন্ডলি ।</p>
                                <p>Other Options:</p>
                                <p>Okta, OneLogin, Auth0, Duo, Centrify, passportjs</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>3. What other services does firebase provide other than authentication</h4>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2'>
                            <p>Firebase Authentication বাদে অন্য যে সকল সার্ভিস প্রদান করে থাকেঃ Storage, Realtime Database, Hosting, Analytics, Cloud Messaging ইত্যাদি কাজ করা যায়।</p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Blog;