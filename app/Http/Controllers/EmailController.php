<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMessageMail;

class EmailController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email',
            'message' => 'required|string|max:2000',
        ]);

        Mail::to('your.personal.email@example.com')
            ->send(new ContactMessageMail(
                $validated['name'],
                $validated['email'],
                $validated['message']
            ));

        return response()->json(['success' => true]);
    }
}
