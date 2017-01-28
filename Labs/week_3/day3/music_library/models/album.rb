
require_relative('../db/sql_runner')
require_relative('artist')

class Album
  attr_reader :id, :name, :artist_id 
  def initialize(options)
    @id = options['id'].to_i
    @name = options['name']
    @artist_id = options['artist_id'].to_i
  end

  def save
    sql = "insert into albums(name, artist_id) values('#{@name}', #{@artist_id}) returning *"
    album = Sqlrunner.run(sql).first
    @id = album['id']    
  end

  def artist
    sql = "select * from artists where id = #{@artist_id}"
    artist = Sqlrunner.run(sql).first
    return Artist.new(artist)
  end
end