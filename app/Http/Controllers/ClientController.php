<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class ClientController extends Controller {

	public function client()
	{
		return view("client/client");
	}

	public function builder()
	{
		return view("client/builder");
	}


}
