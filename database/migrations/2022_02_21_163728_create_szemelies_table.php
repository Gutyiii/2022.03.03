<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('szemelies', function (Blueprint $table) {
            $table->increments('szemely_id'); 		
	$table->integer('jogosultsag_id')->unsigned(); 		
	$table->foreign('jogosultsag_id')->references('jogosultsag_id')->on('jogosultasgs');
	$table->string('email_cim');
	$table->string('jelszo');
	$table->string('nev');
	$table->date('szul_datum');
	$table->string('neme');
	$table->string('igazolvany_szam');
	$table->string('igazolvany_tipusa');
	$table->integer('tel_szam');
	$table->string('kep');
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('szemelies');
    }
};
