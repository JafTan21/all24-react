<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {

            $validator = Validator::make($request->user, [
                'name' => ['required'],
                'username' => ['required', 'unique:users,username'],
                'phone' => ['required', 'unique:users,phone'],
                'email' => ['required', 'email', 'unique:users,email'],
                'password' => ['required'],
                'club_id' => ['required', 'exists:clubs,id'],
            ]);
            if ($validator->fails()) {
                return $this->apiResponse([
                    'errors' => $validator->errors()
                ], 500);
            }

            return $this->apiResponse([
                'user' => User::create([
                    'name' => $request->user['name'],
                    'username' => $request->user['username'],
                    'email' => $request->user['email'],
                    'password' => Hash::make($request->user['password']),
                    'club_id' => $request->user['club_id'],
                    'phone' => $request->user['phone'],
                ]),
                'message' => 'Registration successful'
            ]);
        } catch (\Exception $e) {
            return $this->apiResponse([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->user['email'])->first();

        if (!$user || !Hash::check($request->user['password'], $user->password)) {
            return $this->apiResponse([
                'message' => 'Invalid email or password'
            ], 401);
        }

        $token = $user->createToken($request->device)->plainTextToken;

        return $this->apiResponse([
            'token' => $token,
            'user' => $user,
            'message' => 'Login successfull'
        ]);
    }
}