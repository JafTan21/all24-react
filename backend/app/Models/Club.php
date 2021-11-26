<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    use HasFactory;

    public  $fillable = [
        'name', 'balance', 'is_active', 'rate',
        'owner_email', 'owner_password', 'owner_name'
    ];

    protected $hidden = [
        'owner_email', 'owner_password', 'owner_name'
    ];

    public function scopeWhereActive($query)
    {
        return $query->where('is_active', true);
    }
}