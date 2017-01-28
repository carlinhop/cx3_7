require_relative 'person'

class Medic < Person
  def heal(patient)

    return patient.name + ", you're cured"
  end
end