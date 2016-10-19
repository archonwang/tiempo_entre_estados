Deface::Override.new :virtual_path  => 'issues/_list',
                     :name          => 'show_issues_with_tee_total_time',
                     :original		=> 'c167ec04873e204cbb10a793f2b1091ff7de63ea',
                     :replace       => "erb[loud]:contains(\"raw query.inline_columns.map\")",
                     :text          => '<%= raw query.inline_columns.map {|column| 
		                                    if column.name != :total_time
		                                    "<td class=\"#{column.css_classes}\">#{column_content(column, issue)}</td>"
		                                    else
		                                    "<td class=\"#{column.css_classes}\">#{Issue.get_total_time(issue.id, @project)} hora(s)</td>"
		                                    end
		                                    }.join %>'