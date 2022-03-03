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
        Schema::create('eszkoztars', function (Blueprint $table) {
             //külső kulcs
         $table->integer('terem_id')->unsigned();		
         $table->foreign('terem_id')->references('terem_id')->on('terems');
             //külső kulcs
         $table->integer('eszkoz_tipus_szamlalo')->unsigned();		
         $table->foreign('eszkoz_tipus_szamlalo')->references('eszkoz_tipus_szamlalo')->on('eszkozs');
         $table->integer('dbszam');
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
        Schema::dropIfExists('eszkoztars');
    }
};
