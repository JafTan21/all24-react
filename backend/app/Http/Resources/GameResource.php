<?php

namespace App\Http\Resources;

use App\Constants\GameTypes;
use Illuminate\Http\Resources\Json\JsonResource;

class GameResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'game_type' => collect(GameTypes::$values)->where('id', $this->game_type_id)->first(),
            'team1' => $this->team1,
            'team2' => $this->team2,
            'starting_time' => $this->starting_time ? date("Y-m-d h:i a", strtotime($this->starting_time)) : null,
            'ending_time' => $this->ending_time ? date("Y-m-d h:i a", strtotime($this->ending_time)) : null,
            'live_score' => $this->live_score,
            'status' => $this->status,
            'is_active' => $this->is_active,
            'short_description' => $this->short_description,
            'area_hidden' => $this->area_hidden,
            'added_by_email' => $this->added_by_email,

            'questions' => $this->questions
        ];
    }
}