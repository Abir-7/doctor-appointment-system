// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const url = request.nextUrl.clone();

// const token:any= await getToken({req:request})

//   const userRoutes = [
//     "/dashboard/user/profile",
//     "/dashboard/user/change-password",
//   ];

//   const adminRoutes = [
//     "/admin/AdminDashboard",
//     "/dashboard/admin/change-password",
//   ];

//   const doctorRoutes = [
//     "/doctor/DoctorDashboard",
//     "/doctor/appoinment_history",
//   ];



//  if (token) {
//     console.log(token)
//     url.pathname = "/not-found";


//     // // if token is expired then redirect to login page
//      if (token.exp < Date.now() / 1000) {
//       url.pathname = "/signin";
//       return NextResponse.redirect(url);
//      }
//     // // if user role is not admin and user is trying to access admin routes then redirect to login page
//     if (
//       (token.role !== 'admin') &&
//     (adminRoutes.includes(pathname))
//  ) {
//   return NextResponse.redirect(url);
//   }

//     // // if admin is trying to access user routes then redirect to login page
//      if (token.role === 'doctor' && (userRoutes.includes(pathname)) || adminRoutes.includes(pathname)) {
//        return NextResponse.redirect(url);
//      }

//     // // if super-admin is trying to access user routes then redirect to login page
//  if (token.role === 'patient' && (doctorRoutes.includes(pathname)|| adminRoutes.includes(pathname))) {
//       return NextResponse.redirect(url);
//     }
//   }


// }

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/patient/PatientDashboard',
}