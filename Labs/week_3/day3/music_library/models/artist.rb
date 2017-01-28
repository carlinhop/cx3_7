require_relative('../db/sql_runner')
require_relative('album')

class Artist
  attr_reader :id, :name 
  def initialize(options)
    @id = options['id'].to_i
    @name = options['name']
  end

  def save
    sql = "insert into artists(name) values('#{@name}') returning *"
    artist = Sqlrunner.run(sql).first
    @id = artist['id']    
  end

  def albums
    sql = "select * from albums where artist_id = #{@id}"
    albums = Sqlrunner.run(sql)
    
     albums.map{|album| Album.new(album)}
  end


end