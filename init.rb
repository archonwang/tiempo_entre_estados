require 'tee/issue_status_patch'
require 'tee/project_patch'
require 'tee/role_patch'
require 'tee/application_helper_patch'

Redmine::Plugin.register :tiempo_entre_estados do
  name 'Tiempo Entre Estados plugin'
  author 'Author name'
  description 'Plugin que permite controlar el tiempo entre distintos estados, y donde se muestra el tiempo invertido entre esos estados'
  version '0.0.1'
  url 'http://example.com/path/to/plugin'
  author_url 'http://example.com/about'

  project_module :time_statuses do
    permission :tee_view_config, :tee => [:index]
    permission :tee_edit_statuses, :tee_prs => [:index, :create]
    permission :tee_edit_timetables, :tee_timetables => [:index, :create, :edit, :update, :destroy]
  end
  menu :project_menu, :config_time_statuses, { :controller => 'tee', :action => 'index' }, :caption => 'Control de tiempos', :last => true, :param => :project_id

end
