namespace :db do 
	desc "adds full team name to game"
	task add_full_team_name: :environment do 
		Game.all.each do |game|
			game.home_full_name = Team.find_by(team_id: game.home_team_id).full_name
			game.away_full_name = Team.find_by(team_id: game.away_team_id).full_name
			game.save!
		end
	end
end