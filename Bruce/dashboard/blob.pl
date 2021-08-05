#!/usr/bin/env perl

my %companies = {};
while(my $line = <>) {
	chomp($line);
	$line =~ s///;
	if($line =~ /^(\d+),(.*)$/) {
		my $company = $2;
		#print("$company\n");
		if(!defined($companies{$company})) {
			$companies{$company} = 0;
		}
		$companies{$company} += 1;
	}
}
foreach my $key (keys(%companies)) {
	print("$key,$companies{$key}\n");
}
