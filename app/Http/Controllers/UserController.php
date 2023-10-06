<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddUserRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function loginPage()
    {
        return view('login');
    }

    public function registerPage()
    {
        return view('create');
    }

    public function register(AddUserRequest $request)
    {
        $data = $request->validated();

        $credentials = [
            'email' => $data['email'],
            'password' => $data['password']
        ];

        $data['password'] = bcrypt($data['password']);

        try {
            User::create($data);

            Auth::guard()->attempt($credentials);

            return to_route('user.dashboard')->with('success', 'Account created successfully.');
        } catch (\Exception $e) {
            return to_route('user.login-page')->with('failure', 'Account not created!' . $e->getMessage());
        }
    }

    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        $credentials = [
            'email' => $data['email'],
            'password' => $data['password']
        ];

        if (Auth::guard()->attempt($credentials)) {
            return to_route('user.dashboard')->with('success_customer', 'Login successfully.');
        } else {
            return to_route('user.login-page')->with('failure_customer', 'Your credentials does not match our records');
        }
    }

    public function dashboard()
    {
        return view('dashboard');
    }

    public function logout()
    {
        Auth::guard()->logout();
        return to_route('user.login-page');
    }
}
