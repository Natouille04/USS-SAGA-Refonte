<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bulletins;

class BulletinsController extends Controller
{
    public function getLast()
    {
        $limit = (int) ($_GET['limit'] ?? 5);

        $bulletins = Bulletins::orderBy('created_at', 'desc')
            ->limit($limit)
            ->get();

        return response()->json($bulletins);
    }
}