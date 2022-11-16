<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\Admin\AdminResource;
use App\Models\User;
use Illuminate\Routing\Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
       $users = User::all();
       return AdminResource::collection($users);
    }
}
