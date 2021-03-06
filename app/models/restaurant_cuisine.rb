# == Schema Information
#
# Table name: restaurant_cuisines
#
#  id            :bigint           not null, primary key
#  restaurant_id :integer          not null
#  cuisine_id    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class RestaurantCuisine < ApplicationRecord
    validates :restaurant_id, :cuisine_id, presence: true
    validates :restaurant_id, uniqueness: { scope: :cuisine_id }
    
    belongs_to :cuisine
    belongs_to :restaurant
end
